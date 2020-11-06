import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const cookbookStore = {
    state: () => ({
        cookbooks: JSON.parse(localStorage.getItem('cookbooks')),
        cookbook: {},
        definitions: {
            categories: [],
            nutritional_details: []
        },
        allCookbooks: JSON.parse(localStorage.getItem('cookbooks')),
        sorted: [],
        sortBy: 'all',
        policies: {
            cookiePolicy: '',
            usagePolicy: '',
            dataRetentionPolicy: '',
            termsAndConditons: ''
        }
    }),
    mutations: {
        STORE_DEFINITIONS(state, definitions) {
            state.definitions.categories = definitions[0]
            state.definitions.nutritional_details = definitions[1]
        },
        STORE_POLICIES(state, policies) {
            state.policies.cookiePolicy = policies.cookiePolicy.content
            state.policies.usagePolicy = policies.usagePolicy
            state.policies.dataRetentionPolicy = policies.dataRetentionPolicy
            state.policies.termsAndConditons = policies.termsAndConditions
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
        SET_COOKBOOK_STATE(state, newState) {
            this.state.resource_isLoading = true
            state.cookbook = newState
        }
    },
    actions: {
        load_cookbooks(context) {
            axios.get(this.state.named_urls.cookbook_resources)
            .then(function (response) {
                localStorage.setItem('cookbooks', JSON.stringify(response.data.data))
            })
            .catch(function (error) {
                console.log('there was an error loading the cookbooks from the api', error);
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
        },
        load_policies(context) {
            axios.get(this.state.named_urls.policies)
            .then(function (response) {
                context.commit('STORE_POLICIES', response.data.response)
            })
            .catch(function (error) {
                console.log('There was an error loading policies: ', error);
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
        },
        get_cookie_policy: (store) => () => {
            return store.policies.cookiePolicy
        }
    },
}
