import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const recipeStore = {
	state: () => ({
		recipe: {}
	}),
	mutations: {
		INCREMENT_CLAP(state, claps) {
			this.state.recipe.claps = claps
		},
		UPDATE_RECIPE_STATE(state, newState) {
			this.state.recipe = newState
		}
	},
    actions: {
		async addClap(context, payload) {
			let url = process.env.BASE_URL + 'add-clap';

			await axios.post(url, {
                recipe_id: payload.recipeId,
            }, {
                headers: {
                    'X-API-KEY': process.env.API_KEY,
                    'X-CLIENT-SECRET': process.env.API_SECRET
                }
            }).then(function (response) {
                if (response.data.updated) {
					context.commit('INCREMENT_CLAP', response.data.claps)
				}
            }).catch(function (error) {
                // console.log('clapping error', error.response)
            })
		},
		async fetch_recipe(context, recipeId) {
			context.commit("SET_LOADING_STATE", true)
			
			await axios.get(this.state.named_urls.recipe_resources + '/' + recipeId, {
                headers: {
                    'X-API-KEY': process.env.API_KEY,
                    'X-CLIENT-SECRET': process.env.API_SECRET
                }
            }).then(function (response) {
				response.data.ingredients = JSON.parse(response.data.ingredients).data

				const parsedData = JSON.parse(response.data.nutritional_detail)

				response.data.nutritional_detail.cal = parsedData.cal
				response.data.nutritional_detail.carbs = parsedData.carbs
				response.data.nutritional_detail.protein = parsedData.protein
				response.data.nutritional_detail.fat = parsedData.fat
				
				context.commit('UPDATE_RECIPE_STATE', response.data)
				context.commit("SET_LOADING_STATE", false)
            }).catch(function (error) {
                // console.log('fetch error', error.response)
			})
        }
	}
}
