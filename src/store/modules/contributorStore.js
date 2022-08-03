export const contributorStore = {
    mutations: {
        UPDATE_CONTRIBUTOR_OBJECT(state, newState) {
            this.state.contributor = newState.data.user[0]
            // console.log("contributor obj",  this.state.contributor.recipes)
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
        }
    }
}
