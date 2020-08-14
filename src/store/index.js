import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
	isLogged: !!localStorage.getItem('token'),
	cookbooks: [],
	definitions: {
		categories: [],
		nutritional_details: []
	},
	allCookbooks: [],
	sorted: [],
	sortBy: 'all',
	error: false
};

const mutations = { // Mutate the current state
	LOGIN_USER(state) {
		state.isLogged = true;
	},
	LOGOUT_USER(state) {
		state.isLogged = false;
	},
	STORE_COOKBOOKS(state, cookbooks) {
		state.cookbooks = cookbooks //how to pass data along from the instance
		state.allCookbooks = cookbooks
	},
	STORE_DEFINITIONS(state, definitions) {
		state.definitions.categories = definitions[0]
		state.definitions.nutritional_details = definitions[1]
	},
	SORT(state, payload) {
		if (payload === 'all') {
			state.cookbooks = state.allCookbooks
		} else if (payload === 'location') {
			state.cookbooks = state.allCookbooks
			const filtered = state.cookbooks.filter((c) => {
				axios
				.get('https://ipinfo.io?token=13838312c2e092')
				.then(response => (localStorage.setItem('selectedFlag', response.data.country)))
				return c.flag.flag === localStorage.getItem('selectedFlag').toLowerCase()
			})
			state.cookbooks = filtered
		} else {
			state.cookbooks = state.allCookbooks
			const filtered = state.cookbooks.filter((c) => {
				if (c.categories.length > 0) {
					let filteredCategories = JSON.parse(JSON.stringify(c.categories))
					for (let i=0; i < filteredCategories.length; i++){
						if(filteredCategories[i].slug === payload) {
							return filteredCategories
						}
					}
				}
			})
			state.cookbooks = filtered
		}
		localStorage.setItem('sortBy', payload)
	},
	SUBSCRIPTION_ERROR() {
		state.error = true
		$("#contact-card").addClass("error");
		$("#loading-btn").removeClass("loading")
	},
	SUBSCRIPTION_SUCCESS() {
		state.error = false
		$("#status-header").show()
		$("#status-msg").text('You will now recieve weekly updates in your email.')
		$("#subscription-state").addClass("success")
		$("#contact-card").removeClass("error");
		$("#subscription-state").removeClass("hidden")
		$("#loading-btn").removeClass("loading")
	}
};

const actions = { // Get data from server and send that to mutations to mutate the current state
	load_cookbooks(context) {
		let url = process.env.BASE_URL + '/cookbooks'
		axios.get(url)
		.then(function (response) {// handle success
			localStorage.setItem('cookbooks', JSON.stringify(response.data.data))
			context.commit('STORE_COOKBOOKS', response.data.data)
		})
		.catch(function (error) {// handle error
			console.log(error);
		})
		.then(function () {// always executed
		});
	},
	sort(context, payload) {
		context.commit('SORT', payload)
	},
	subscribeUser(context, payload) {
		let url = process.env.BASE_URL + '/subscriptions'
		axios.post(url, {
			email: payload
		})
		.then(function (response) {// handle success
			context.commit('SUBSCRIPTION_SUCCESS')
		})
		.catch(function (error) {// handle error
			$("#subscription-state").removeClass("hidden")
			$("#subscription-state").removeClass("success")
			$("#subscription-state").addClass("error")
			$("#status-header").hide()
			$("#status-msg").text(error.response.data.email)
			context.commit('SUBSCRIPTION_ERROR')
		})
		.then(function () {// always executed
		});
	},
	load_definitions(context) {
		let url = process.env.BASE_URL + '/definitions'
		axios.get(url)
		.then(function (response) {// handle success
			context.commit('STORE_DEFINITIONS', response.data)
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
			.then(function () {
			// always executed
		});
	}
};

const getters = {
	get_cookbook: (state) => (id) => {
		let cookbooks = localStorage.getItem('cookbooks')
		return JSON.parse(cookbooks).find(x => (x.id === parseInt(id)))
	},
	get_recipe: (state) => (cookbookId, recipeId) => {
		let cookbooks = localStorage.getItem('cookbooks')
		let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
		return cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
	}
};
export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state,
	mutations,
	actions,
	getters
});
