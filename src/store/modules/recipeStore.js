import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const recipeStore = {
	state: () => ({
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
			}).then((response) => {
				if (response.data.updated) {
					context.commit('INCREMENT_LIKES_COUNT', response.data.claps)
				}
			})
		},
		fetch_recipe(context, recipeId) {
            context.commit("SET_LOADING_STATE", true)

            axios.get(this.state.named_urls.recipe_resources + '/' + recipeId)
            .then(function (response) {
                response.resource = "recipe"
                context.commit("SET_RESOURCE_STATE", response.data)
            })
            .catch(function (error) {
                error.resourceType = "recipe"
                error.resourceId = recipeId
                
                context.commit('STORE_ERRORS', error)
            });
        }
	},
	getters: {
        get_recipe: (state) => (cookbookId, recipeId) => {
			let cookbooks = localStorage.getItem("unfiltered")
            let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            return cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
		}
    },
}
