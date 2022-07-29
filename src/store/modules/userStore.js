
export const userStore = {
    state: () => ({
        success: false
    }),
    mutations: {},
    actions: {
        followUser(context, payload) {
            let token = payload.token
            let contributor_id = payload.contributor_id
            let follower_id = payload.follower_id

            //grab token make request to:
            //follow endpoint
            //req params { contributor_id }

            let url = process.env.BASE_URL + 'follow';

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
    }
}
