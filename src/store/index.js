import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  isLogged: !!localStorage.getItem('token'),
  cookbooks: [],
  allCookbooks: [],
  sorted: [],
  currentSort: '',
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
    state.allCookbooks = cookbooks
  },

  RESET(state) {
    state.cookbooks = allCookbooks
  },

  SORT(state, payload) {
    if (payload === 'all') {
      state.cookbooks = state.allCookbooks
    } else if (payload === 'nationality') {
      state.cookbooks = state.allCookbooks
      const filtered = state.cookbooks.sort()
      state.cookbooks = filtered
    } else {
      state.cookbooks = state.allCookbooks
      const filtered = state.cookbooks.filter((c) => {
        return c.category.slug === payload;
      })
      state.cookbooks = filtered
    }
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
  sort(context, payload) {
    context.commit('SORT', payload)
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  // getters
});
