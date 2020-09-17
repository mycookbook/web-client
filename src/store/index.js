require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';
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
		resource_isLoading: true
    }),
	modules: {
		cookbookStore,
		recipeStore,
		subscriptionStore,
		registerStore,
		varietiesStore
	}
});
