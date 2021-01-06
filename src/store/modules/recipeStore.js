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
			state.hasClapped += 1
		},
		RESET_HASCLAPPED(state) {
			state.hasClapped = 0
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
                // console.log('clapping error', error.response)
            })
		},
		async fetch_recipe(context, recipeId) {
			context.commit("SET_LOADING_STATE", true)

			const uri = this.state.named_urls.recipe_resources + '/' + recipeId
			
			await this.state.api.client.get(uri, this.state.api.options)
			.then(function (response) {
				// response.data.ingredients = JSON.parse(response.data.ingredients).data
				response.data.ingredients = [
					{
						name: '2 lbs red potatoes',
						thumbnail: 'https://www.irishtimes.com/polopoly_fs/1.3594671.1534163385!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'
					}, {
						name: '4 tablespoons salt',
						thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61EK5fHr9gL._SL1500_.jpg'
					}, {
						name: '1 medium onion chopped',
						thumbnail: 'https://mybutcherwadingriver.com/wp-content/uploads/2020/05/red-onion.jpg'
					}, {
						name: 'a bag of baby carrots',
						thumbnail: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg'
					}
				]

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
            }).catch(function (error) {
				// console.log('fetch error', error)
				context.commit("SET_LOADING_STATE", false)
			})
		},
		reset_hasClapped(context) {
			context.commit('RESET_HASCLAPPED');
		}
	}
}
