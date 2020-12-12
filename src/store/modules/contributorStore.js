import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const contributorStore = {
    state: () => ({}),
    mutations: {},
    actions: {
        fetch_contributor(context, username) {
            context.commit("SET_LOADING_STATE", true)

            axios.get(this.state.named_urls.user_resources + '/' + username)
            .then(function (response) {
                response.resource = "cookbook"
                context.commit("SET_RESOURCE_STATE", response.data)
            }).catch(function (error) {
                error.resourceType = "cookbook"
                error.resourceId = cookbookId
                
                context.commit('SET_ERROR_STATE', error)
            });
        }
    },
    getters: {
        get_contributor: (state) => (cookbookId, recipeId, username) => {
            let cookbooks = localStorage.getItem('unfiltered')
            let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            let recipe = cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
            
            return recipe.author
        }
    }
}
