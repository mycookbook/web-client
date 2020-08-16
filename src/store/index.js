require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import { cookbookStore } from './modules/cookbookStore.js'
import { recipeStore } from './modules/recipeStore.js'
import { subscriptionStore } from './modules/subscriptionStore.js'

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		cookbookStore,
		recipeStore,
		subscriptionStore
	}
});
