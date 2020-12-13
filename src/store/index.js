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
import { contributorStore } from './modules/contributorStore'

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
        errors: {},
        success: {},
        form_errors: {
            registration_form: {},
            contact_form: {}
        }
	}),
	mutations: {
        UNLOAD_GLOBAL_ERROR_OBJECT() {
            this.state.errors = {}
            this.state.resource_isLoading = false
        },
        UNLOAD_GLOBAL_SUCCESS_OBJECT() {
            this.state.success = {}
            this.state.resource_isLoading = false
        },
        STORE_POLICIES(state, policies) {
            state.policies.cookiePolicy = policies.cookiePolicy.content
            state.policies.usagePolicy = policies.usagePolicy.content
            state.policies.dataRetentionPolicy = policies.dataRetentionPolicy.content
            state.policies.termsAndConditons = policies.termsAndConditions.content
        },
        SET_ERROR_STATE(state, errorObject) {
           
            let code = errorObject.response.status
            let message = errorObject.response.data
            let resourceType = errorObject.resourceType
            let resourceId = errorObject.resourceId

            this.state.errors.apiError = { code: code, message: message, resourceType: resourceType,  resourceId: resourceId }
        },
        SET_SUCCESS_STATE(state, successObject) {
            let code = successObject.response.status
            let message = successObject.successMessage
            let resourceType = successObject.resourceType
            let resourceId = successObject.resourceId

            this.state.success.apiMessage = { code: code, message: message, resourceType: resourceType,  resourceId: resourceId }
        },
        SET_LOADING_STATE(state, status) {
            this.state.resource_isLoading = status
        },
        SET_RESOURCE_STATE(state, newState) {
            this.state.resource_isLoading = false
            state[newState.resource] = newState
        }
    },
	actions: {
        async load_policies(context) {
            const response = await axios.get(this.state.named_urls.policies, {
                headers: {
                    'X-API-KEY': process.env.REQUEST_HEADERS.API_KEY,
                    'X-CLIENT-SECRET': process.env.REQUEST_HEADERS.API_SECRET
                }
            })
            context.commit('STORE_POLICIES', response.data.response)
        },
        unload_global_error_object(context) {
            context.commit("UNLOAD_GLOBAL_ERROR_OBJECT")
        },
        unload_global_success_object(context) {
            context.commit("UNLOAD_GLOBAL_SUCCESS_OBJECT")
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
        contributorStore
    },
    plugins: [createPersistedState()]
});
