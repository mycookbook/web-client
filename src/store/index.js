require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import { cookbookStore } from './modules/cookbookStore.js'
import { recipeStore } from './modules/recipeStore.js'
import { subscriptionStore } from './modules/subscriptionStore.js'

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
	isLogged: !!localStorage.getItem('token')
};

const mutations = { // Mutate the current state
	LOGIN_USER(state) {
		state.isLogged = true;
	},
	LOGOUT_USER(state) {
		state.isLogged = false;
	}
};

const actions = {};
const getters = {};

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		cookbookStore,
		recipeStore,
		subscriptionStore
	}
});
