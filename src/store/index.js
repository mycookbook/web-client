require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueResource from 'vue-resource';
import createPersistedState from "vuex-persistedstate";

import { cookbookStore } from './modules/cookbookStore.js'
import { recipeStore } from './modules/recipeStore.js'
import { subscriptionStore } from './modules/subscriptionStore.js'
import { registerStore } from './modules/user/registerStore.js'
import { varietiesStore } from './modules/varietiesStore.js'
import { contributorStore } from './modules/contributorStore.js'
import { searchStore } from './modules/searchStore.js'
import { userStore } from './modules/userStore.js'
import router from '../router/index.js'

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: () => ({
        named_urls: {
            cookbook_resources: process.env.BASE_URL + 'cookbooks',
            recipe_resources: process.env.BASE_URL + 'recipes',
            user_resources: process.env.BASE_URL + 'users',
            definitions: process.env.BASE_URL + 'definitions',
            policies: process.env.BASE_URL + 'policies',
            ipInfo: {
                uri: 'https://ipinfo.io',
                token: process.env.IPINFO_TOKEN
            }
        },
        resource_isLoading: false,
        policies: {
            cookiePolicy: '',
            usagePolicy: '',
            dataRetentionPolicy: '',
            termsAndConditons: ''
        },
        form_errors: {
            registration_form: {},
            contact_form: {}
        },
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2NjQ4ODYyNjksImV4cCI6MTY2NDk3MjY2OSwibmJmIjoxNjY0ODg2MjY5LCJqdGkiOiJQTmREdXE1bVBEc2lrSUIzIiwic3ViIjo0MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.wJszEQVp-ZQGJFAP_kdnwKe1xOMAR0YwX1HsLLogBk0',
        api: {
            client: axios,
            options: {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        },
        response: {
            statuses: {
                unauthorized: 401,
                unprocessible: 422,
                ok: 200,
                server: 500
            }
        },
        access_token: null,
        active_user: {},
        contributor: {},
        username: null
    }),
    mutations: {
        STORE_POLICIES(state, policies) {
            state.policies.cookiePolicy = policies.cookiePolicy.content
            state.policies.usagePolicy = policies.usagePolicy.content
            state.policies.dataRetentionPolicy = policies.dataRetentionPolicy.content
            state.policies.termsAndConditons = policies.termsAndConditions.content
        },
        SET_LOADING_STATE(state, status) {
            this.state.resource_isLoading = status
        },
        SET_ACTIVE_USER(state, req) {

            this.state.access_token = req.code

            this.state.username = req.username

            location.replace('/');
        },
        LOGOUT(state) {
            this.state.access_token = null
            this.state.active_user = {}

            router.push('/')
        }
    },
    actions: {
        async boot(context) {
            const base_urls = {
                'development': 'https://api.cookbookshq.com/api/v1/',
                'production': 'https://api.cookbookshq.com/api/v1/'
            }

            const definitions = base_urls[process.env.NODE_ENV] + 'definitions'
            const cookbook_resources = base_urls[process.env.NODE_ENV] + 'cookbooks'
            const policies = base_urls[process.env.NODE_ENV] + 'policies'

            await this.state.api.client.all([
                this.state.api.client.get(definitions, this.state.api.options),
                this.state.api.client.get(cookbook_resources, this.state.api.options),
                this.state.api.client.get(policies, this.state.api.options)
            ]).then(this.state.api.client.spread((definitions, cookbooks, policies) => {
                context.commit('STORE_DEFINITIONS', definitions.data)
                context.commit('STORE_COOKBOOKS', cookbooks.data.data)
                context.commit('STORE_POLICIES', policies.data.response)

                context.commit("SET_LOADING_STATE", false)
            })).catch(function (error) {
                if (error.response.status === this.state.response.statuses.unauthorized) {
                    context.commit("SET_LOADING_STATE", true)
                    console.log('malformed request, check headers')
                } else {
                    console.log('must be a server error')
                }
                context.commit("SET_LOADING_STATE", false)
            })
        },
        unload_global_error_object(context) {
            context.commit("UNLOAD_GLOBAL_ERROR_OBJECT")
        },
        unload_global_success_object(context) {
            context.commit("UNLOAD_GLOBAL_SUCCESS_OBJECT")
        },
        load_skeleton(context) {
            context.commit("SET_LOADING_STATE", true)
        },
        set_active_user(context, req) {
            context.commit("SET_ACTIVE_USER", req)
        },
        logout(context) {
            context.commit("LOGOUT")
        }
    },
    getters: {
        get_cookie_policy: (store) => () => {
            return store.policies.cookiePolicy
        },
        get_data_retention_policy: (store) => () => {
            return store.policies.dataRetentionPolicy
        },
        get_terms_and_conditions: (store) => () => {
            return store.policies.termsAndConditons
        },
        get_usage_policy: (store) => () => {
            return store.policies.usagePolicy
        }
    },
    modules: {
        cookbookStore,
        recipeStore,
        subscriptionStore,
        registerStore,
        varietiesStore,
        contributorStore,
        searchStore,
        userStore
    },
    plugins: [createPersistedState()]
});
