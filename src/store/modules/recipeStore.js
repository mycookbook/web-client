import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const recipeStore = {
    getters: {
        get_recipe: (state) => (cookbookId, recipeId) => {
            let cookbooks = localStorage.getItem('cookbooks')
            let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            return cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
        },
    },
    state: () => ({
      // likesCount state currently not in use
      likesCount: 0
    }),
    mutations: {
      INCREMENT_LIKES_COUNT(state, totalCount) {
        state.likesCount = totalCount
      },
    },
    actions: {
      addClap(context, payload) {
        let url = process.env.BASE_URL + 'add-clap';

        axios.post(url, {
          recipe_id: payload.recipeId,
        })
          .then((response) => {
            if (response.data.updated) {
              context.commit('INCREMENT_LIKES_COUNT', response.data.claps)
            }
          })
      }
    }
  }
