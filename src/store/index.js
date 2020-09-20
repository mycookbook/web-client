require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueResource from 'vue-resource';

import { cookbookStore } from './modules/cookbookStore.js'
import { recipeStore } from './modules/recipeStore.js'
import { subscriptionStore } from './modules/subscriptionStore.js'
import { registerStore } from './modules/user/registerStore.js'
import { varietiesStore } from './modules/varietiesStore.js'

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: () => ({
		named_urls: {
			cookbook_resources: process.env.BASE_URL + 'cookbooks',
			recipe_resources: process.env.BASE_URL + 'recipes',
			user_resources: process.env.BASE_URL + 'users',
			definitions: process.env.BASE_URL + 'definitions'
		},
		resource_isLoading: false
	}),
	mutations: {
        SET_RESOURCES_STATE_TO_FALSE(state, newState) {
            this.state.resource_isLoading = false
            localStorage.setItem("cookbooks", JSON.stringify(newState.data))
        },
        SET_RESOURCES_STATE_TO_TRUE() {
            this.state.resource_isLoading = true
        }
    },
	actions: {
        reload_global_resources(context) {
            context.commit('SET_RESOURCES_STATE_TO_TRUE')
            
            axios.get(this.state.named_urls.cookbook_resources)
            .then(function (response) {
                // const oldState = JSON.parse(context.state.cookbooks)
                const newState = response.data
               
                //todo: compare oldState vs newState before updating store with newState
                context.commit('SET_RESOURCES_STATE_TO_FALSE', newState)
            })
            .catch(function (error) {
                console.log('there was an error fetching this recipe from the api', error);
            })
            .then(function () {});
        }
    },
	modules: {
		cookbookStore,
		recipeStore,
		subscriptionStore,
		registerStore,
		varietiesStore
	}
});
