/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const cookbookStore = {
	state: () => ({
		cookbooks: [],
		definitions: {
			categories: [],
			nutritional_details: [],
		},
		allCookbooks: [],
		sorted: [],
		sortBy: 'all',
	}),
	mutations: {
		STORE_COOKBOOKS(state, cookbooks) {
			state.cookbooks = cookbooks;
			state.allCookbooks = cookbooks;
		},
		STORE_DEFINITIONS(state, definitions) {
			state.definitions.categories = definitions[0];
			state.definitions.nutritional_details = definitions[1];
		},
		SORT(state, payload) {
			if (payload === 'all') {
				state.cookbooks = state.allCookbooks;
			} else if (payload === 'location') {
				state.cookbooks = state.allCookbooks;
				const filtered = state.cookbooks.filter((c) => {
					axios
                    .get('https://ipinfo.io?token=13838312c2e092')
                    .then(response => (localStorage.setItem('selectedFlag', response.data.country)));
					return c.flag.flag === localStorage.getItem('selectedFlag').toLowerCase();
				});
				state.cookbooks = filtered;
			} else {
				state.cookbooks = state.allCookbooks;
				const filtered = state.cookbooks.filter((c) => {
					if (c.categories.length > 0) {
						const filteredCategories = JSON.parse(JSON.stringify(c.categories));
						for (let i = 0; i < filteredCategories.length; i++) {
							if (filteredCategories[i].slug === payload) {
								return filteredCategories;
							}
						}
					}
				});
				state.cookbooks = filtered;
			}
			localStorage.setItem('sortBy', payload);
		},
	},
	actions: {
		load_cookbooks(context) {
			const url = `${process.env.BASE_URL}/cookbooks`;
			axios.get(url)
            .then((response) => {
                localStorage.setItem('cookbooks', JSON.stringify(response.data.data));
                context.commit('STORE_COOKBOOKS', response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {});
		},
		sort(context, payload) {
			context.commit('SORT', payload);
		},
		load_definitions(context) {
			const url = `${process.env.BASE_URL}/definitions`;
			axios.get(url)
            .then((response) => {
                context.commit('STORE_DEFINITIONS', response.data);
            })
            .catch((error) => {
                console.log('There was an error: ', error);
            })
            .then(() => {});
		},
	},
	getters: {
		get_cookbook: () => (id) => {
			const cookbooks = localStorage.getItem('cookbooks');
			return JSON.parse(cookbooks).find(x => (x.id === parseInt(id)));
		},
		get_cookbooks: () => () => {
			const cookbooks = localStorage.getItem('cookbooks');
			return cookbooks;
		},
	},
};
