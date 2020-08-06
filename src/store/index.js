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
  sortBy: 'all',
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

  SORT(state, payload) {
    if (payload === 'all') {
      state.cookbooks = state.allCookbooks
    } else if (payload === 'location') {
      state.cookbooks = state.allCookbooks
      const filtered = state.cookbooks.filter((c) => {
        axios
        .get('https://ipinfo.io?token=13838312c2e092')
        .then(response => (localStorage.setItem('selectedFlag', response.data.country)))
        return c.flag.flag === localStorage.getItem('selectedFlag').toLowerCase()
      })
      state.cookbooks = filtered
    } else {
      state.cookbooks = state.allCookbooks
      const filtered = state.cookbooks.filter((c) => {
        return c.category.slug === payload;
      })
      state.cookbooks = filtered
    }
    localStorage.setItem('sortBy', payload)
  }
};

const actions = { // Get data from server and send that to mutations to mutate the current state
  load_cookbooks(context) {
    let url = process.env.BASE_URL + '/cookbooks'

    axios.get(url)
    .then(function (response) {// handle success
      localStorage.setItem('cookbooks', JSON.stringify(response.data.data))
      console.log('fefe', response.data.data)
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
  }
};

const getters = {
  get_cookbook: (state) => (id) => {
    let cookbooks = localStorage.getItem('cookbooks')
    return JSON.parse(cookbooks).find(x => (x.id === parseInt(id)))
  },
  get_recipe: (state) => (cookbookId, recipeId) => {
    let cookbooks = localStorage.getItem('cookbooks')
    let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))

    return cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
});
