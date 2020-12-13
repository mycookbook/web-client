import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const varietiesStore = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {
        get_varieties: (state) => (cookbookId, recipeId) => {
            const cookbooks = localStorage.getItem('cookbooks')
            const cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            const recipe = cookbook.recipes.find(y => (y.id === parseInt(recipeId)))

            return recipe.variations;
        }
    }
}
