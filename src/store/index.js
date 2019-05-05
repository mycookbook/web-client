import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  isLogged: !!localStorage.getItem('token'),
  cookbooks: null,
  name: 'amaka'
};

const mutations = { // Mutate the current state
  LOGIN_USER(state) {
    state.isLogged = true;
  },

  LOGOUT_USER(state) {
    state.isLogged = false;
  },

  STORE_COOKBOOKS(state, cookbooks) {
    state.cookbooks = cookbooks //how to pass data along from the instance
  },

  CLEAR(state) {
    state.cookbooks = {}
  },

  SORT(state, sorted) {
    state.cookbooks = sorted
  }
};

const actions = { // Get data from server and send that to mutations to mutate the current state
  load_cookbooks(context) {
    let url = process.env.BASE_URL + '/cookbooks'

    axios.get(url)
    .then(function (response) {// handle success
      context.commit('STORE_COOKBOOKS', response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  },
  sort(context, sorted) {
    context.commit('SORT', sorted)
  }
};

const getters = {
  // Compute derived state based on the current state. More like computed property.
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
});
