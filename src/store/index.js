import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  isLogged: !!localStorage.getItem('token'),
  cookbooks: null
};

const mutations = {
  LOGIN_USER(state) {
    state.isLogged = true;
  },

  LOGOUT_USER(state) {
    state.isLogged = false;
  },

  SAVE_COOKBOOKS(state) {
    state.cookbooks = state.cookbooks //how to pass data along from the instance
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
});
