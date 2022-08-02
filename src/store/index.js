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
        api: {
            client: axios,
            options: {
                headers: {
                    'X-API-KEY': "SijjocvGGcgnXVbXzSoVtmN5qPor0jl8PnlRJ25U26JCODpoyi"
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
        active_user: null
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
        ATTEMPT_LOGIN(state, req) {
            this.state.access_token = req.code

            this.state.active_user = {
                'username': 'mjay',
                'cookbooks': 20,
                'recipes': 150,
                'drafts': [
                    {
                        "id": 1,
                        "user_id": 1,
                        "resource_type": "recipe",
                        "contents": {
                            "name": "Draft Recipe 1",
                            "imgUrl": "https://cookbookshq.s3.us-east-2.amazonaws.com/87056075-7837-4a2a-90ad-6ac6d28f92c8.JPG",
                            "description": "draft description",
                            "cookbook": {
                                "name": "existing cookbook name",
                                "slug": "cookbook slug"
                            }
                        }
                    },
                    {
                        "id": 2,
                        "user_id": 1,
                        "resource_type": "cookbook",
                        "contents": {
                            "name": "Draft Cookbook 1",
                            "bookCoverImg": "https://cookbookshq.s3.us-east-2.amazonaws.com/87056075-7837-4a2a-90ad-6ac6d28f92c8.JPG",
                            "description": "draft description. This can be a long description. it will be truncated anyway."
                        }
                    }
                ]
            }

            location.replace('https://web.cookbookshq.com//#/');

            //make a call to or backend api
            //if 200 commit 
            //else set error

            // this.state.api.client.post(process.env.BASE_URL + 'auth/tiktok', {
            //     code: req.code
            // }, this.state.api.options)
            //     .then(function (response) {
            //         alert(JSON.stringify(response))
            //         console.log('response', response)

            //         this.state.active_user = {
            //             'username': 'mjay',
            //             'cookbooks': 20,
            //             'recipes': 150,
            //             'drafts': [
            //                 {
            //                     "id": 1,
            //                     "user_id": 1,
            //                     "resource_type": "recipe",
            //                     "contents": {
            //                         "name": "Draft Recipe 1",
            //                         "imgUrl": "https://cookbookshq.s3.us-east-2.amazonaws.com/87056075-7837-4a2a-90ad-6ac6d28f92c8.JPG",
            //                         "description": "draft description",
            //                         "cookbook": {
            //                             "name": "existing cookbook name",
            //                             "slug": "cookbook slug"
            //                         }
            //                     }
            //                 },
            //                 {
            //                     "id": 2,
            //                     "user_id": 1,
            //                     "resource_type": "cookbook",
            //                     "contents": {
            //                         "name": "Draft Cookbook 1",
            //                         "bookCoverImg": "https://cookbookshq.s3.us-east-2.amazonaws.com/87056075-7837-4a2a-90ad-6ac6d28f92c8.JPG",
            //                         "description": "draft description"
            //                     }
            //                 }
            //             ]
            //         }
        
            //         location.replace('https://web.cookbookshq.com//#/');
            //     }).catch(function (error) {
            //         console.log('error', error.response)
            //     });
        },
        LOGOUT(state) {
            this.state.access_token = null
            this.state.active_user = null

            router.push('/')
        }
    },
    actions: {
        async boot(context) {
            await this.state.api.client.all([
                this.state.api.client.get(this.state.named_urls.definitions, this.state.api.options),
                this.state.api.client.get(this.state.named_urls.cookbook_resources, this.state.api.options),
                this.state.api.client.get(this.state.named_urls.policies, this.state.api.options)
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
        attempt_login(context, req) {
            context.commit("ATTEMPT_LOGIN", req)
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
