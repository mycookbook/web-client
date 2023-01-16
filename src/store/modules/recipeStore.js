import { createClient } from 'pexels';

export const recipeStore = {
	state: () => ({
		recipe: {},
		hasClapped: 0,
		maxAllowedClaps: 10
	}),
	mutations: {
		INCREMENT_CLAP(state, claps) {
			this.state.recipe.claps = claps
			state.hasClapped += 1
		},
		UPDATE_RECIPE_STATE(state, newState) {
			this.state.recipe = newState
		},
		RESET_HASCLAPPED(state) {
			state.hasClapped = 0
		},
		SET_THUMBNAIL_STATE(state, response){
			this.state.thumbnail = response.photos;
		}
	},
	actions: {
		addClap(context, payload) {
			let url = process.env.BASE_URL + 'add-clap';

			this.state.api.client.post(url, {
				recipe_id: payload.recipeId,
			}, this.state.api.options)
				.then(function (response) {
					if (response.data.updated) {
						context.commit('INCREMENT_CLAP', response.data.claps)
					}
				}).catch(function (error) {
					console.log('clapping error', error.response)
				})
		},
		fetch_recipe(context, recipeId) {
			context.commit("SET_LOADING_STATE", true)

			let uri = (process.env.NODE_ENV !== "production") ? 'http://localhost:8080/api/v1/recipes/' + recipeId : process.env.BASE_URL + 'recipes/' + recipeId;

			this.state.api.client.get(uri, this.state.api.options)
				.then(function (response) {
					try {
						response.data.ingredients = JSON.parse(response.data.ingredients)
						const parsedData = JSON.parse(response.data.nutritional_detail)
						const detail = {
							cal: parsedData.cal,
							carbs: parsedData.carbs,
							protein: parsedData.protein,
							fat: parsedData.fat
						}
						response.data.nutritional_detail = detail;
						context.commit('UPDATE_RECIPE_STATE', response.data)
						context.commit("SET_LOADING_STATE", false)
					} catch (err) {
						alert('We are having trouble loading this recipe. Please refresh or try again later.')
					}
				}).catch(function (error) {
					console.log('fetch error', error)
					context.commit("SET_LOADING_STATE", false)
				})
		},
		reset_hasClapped(context) {
			context.commit('RESET_HASCLAPPED');
		},
		async fetch_ingredient_thumbnail(context, ingredient){
			const client = createClient(process.env.PEXEL_API_KEY);
			const query = ingredient;
			await client.photos.search({ query, per_page: 3 })
			.then(photos => {
				context.commit("SET_THUMBNAIL_STATE", photos)
			});
		}
	}
}
