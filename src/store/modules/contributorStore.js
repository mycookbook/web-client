export const contributorStore = {
    mutations: {
        UPDATE_CONTRIBUTOR_OBJECT(state, newState) {
            this.state.contributor = newState.data.user[0]
        },
        UPDATE_ACTIVE_USER(state, newState) {
            this.state.active_user.active = newState.data.user[0]
        }
    },
    actions: {
        fetch_contributor(context, username) {
            context.commit("SET_LOADING_STATE", true)

            const uri = this.state.named_urls.user_resources + '/' + username

            this.state.api.client.get(uri, this.state.api.options)
                .then(function (response) {
                    context.commit("UPDATE_CONTRIBUTOR_OBJECT", response.data)
                    context.commit("SET_LOADING_STATE", false)
                }).catch(function (error) {
                    console.log('fetch contributor error', error.response)
                })
        },
        fetch_active_user(context, username) {
            const uri = this.state.named_urls.user_resources + '/' + username

            this.state.api.client.get(uri, this.state.api.options)
                .then(function (response) {
                    context.commit("UPDATE_ACTIVE_USER", response.data)
                }).catch(function (error) {
                    console.log('fetch active user error', error.response)
                })
        }
    }
}
