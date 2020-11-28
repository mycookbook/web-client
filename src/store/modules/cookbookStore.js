import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const cookbookStore = {
    state: () => ({
        cookbooks: [],
        cookbook: {},
        definitions: {
            categories: [],
            nutritional_details: []
        },
        allCookbooks: JSON.parse(localStorage.getItem("vuex")).cookbookStore.cookbooks,
        sorted: [],
        sortBy: 'all',
        errors: []
    }),
    mutations: {
        STORE_COOKBOOKS(state, cookbooks) {
            state.cookbooks = cookbooks
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
                    .get(this.state.named_urls.ipInfo.uri + '?token=' + this.state.named_urls.ipInfo.token)
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
        SET_COOKBOOK_STATE(state, newState) {
            this.state.resource_isLoading = true
            state.cookbook = newState
        },
        STORE_ERRORS(state, errors) {
            state.errors = {code: error.code, message: errors.message}
        },
    },
    actions: {
        load_cookbooks(context) {
            axios.get(this.state.named_urls.cookbook_resources)
            .then(function (response) {
                context.commit('STORE_COOKBOOKS', response.data.data)
            })
            .catch(function (error) {
                console.log('there was an error loading the cookbooks from the api', error);
                context.commit('STORE_ERRORS', error)
            })
            .then(function () {});
        },
        sort(context, payload) {
            context.commit('SORT', payload)
        },
        load_definitions(context) {
            axios.get(this.state.named_urls.definitions)
            .then(function (response) {
                context.commit('STORE_DEFINITIONS', response.data)
            })
            .catch(function (error) {
                console.log('There was an error loading definitions: ', error);
            })
            .then(function () {});
        }
    },
    getters: {
        get_cookbook: (context, state) => (id) => {
            let cookbooks = localStorage.getItem('cookbooks')
            return JSON.parse(cookbooks).find(x => (x.id === parseInt(id)))
        },
        get_cookbooks: (state) => () => {
            const cookbooks = localStorage.getItem('cookbooks')
            return cookbooks
        }
    },
}
