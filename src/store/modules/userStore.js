
export const userStore = {
    state: () => ({
        success: false
    }),
    mutations: {},
    actions: {
        followUser(context, payload) {
            let url = process.env.BASE_URL + 'follow';

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
        update_user(context, payload) {
            context.commit('SET_LOADING_STATE', true)

            let url = process.env.BASE_URL + 'users/' + payload.name_slug;

            this.state.api.client.post(url, payload, {
                headers: {
                    'Authorization': "Bearer " + payload.token
                }
            }).then(function (response) {
                context.commit('SET_LOADING_STATE', false)
                console.log('response', response)
            }).catch(function (error) {
                context.commit('SET_LOADING_STATE', false)

                if (error.response.status === 401) {
                    alert("logging this loser out")
                }

                console.log('error', error)
            })
        }
    }
}
