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
            nutritional_details: []
        },
        allCookbooks: [],
        sorted: [],
        sortBy: 'all'
    }),
    mutations: {
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
        }
    },
    actions: {
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
        load_definitions(context) {
            let url = process.env.BASE_URL + '/definitions'
            axios.get(url)
            .then(function (response) {// handle success
                context.commit('STORE_DEFINITIONS', response.data)
            })
            .catch(function (error) {
                // handle error
                console.log('There was an error: ', error);
            })
                .then(function () {
                // always executed
            });
        }
    },
    getters: {
        get_cookbook: (state) => (id) => {
            let cookbooks = localStorage.getItem('cookbooks')
            return JSON.parse(cookbooks).find(x => (x.id === parseInt(id)))
        }
    }
}