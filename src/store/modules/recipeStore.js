import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const recipeStore = {
    mutations: {
        SET_RECIPE_STATE(state, newState) {
            this.state.resource_isLoading = false
            localStorage.setItem("cookbooks", JSON.stringify(newState.data))
        }
    },
    actions: {
        reload_recipe(context, id) {
            axios.get(this.state.named_urls.cookbook_resources)
            .then(function (response) {
                // const oldState = JSON.parse(context.state.cookbooks)
                const newState = response.data
               
                //todo: compare oldState vs newState before updating store with newState
                context.commit('SET_RECIPE_STATE', newState)
            })
            .catch(function (error) {
                console.log('there was an error fetching this recipe from the api', error);
            })
            .then(function () {});
        }
    },
    getters: {
        get_recipe: (state) => (cookbookId, recipeId) => {
            let cookbooks = localStorage.getItem('cookbooks')
            let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            return cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
        }
    }
}