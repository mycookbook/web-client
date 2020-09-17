import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

export const recipeStore = {
    getters: {
        get_recipe: (state) => (cookbookId, recipeId) => {
            let cookbooks = localStorage.getItem('cookbooks')
            let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            return cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
        }
    }
}