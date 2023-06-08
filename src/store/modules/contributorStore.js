export const contributorStore = {
    mutations: {
        UPDATE_CONTRIBUTOR_OBJECT(state, newState) {
            this.state.contributor = newState.data.user[0]
        },
        UPDATE_ACTIVE_USER(state, newState) {
            this.state.active_user = newState.data.user[0]
        },
        LOAD_FOLLOWING_DATA(state, data) {
            this.state.following_data = data.response
        }
    },
    actions: {
        fetch_contributor(context, username) {
            context.commit("SET_LOADING_STATE", true)

            const uri = process.env.BASE_URL + 'users/' + username

            this.state.api.client.get(uri)
                .then(function (response) {
                    context.commit("UPDATE_CONTRIBUTOR_OBJECT", response.data)
                    context.commit("SET_LOADING_STATE", false)
                }).catch(function (error) {
                    context.commit('HANDLE_ERROR', error.response);
                })
        },
        fetch_active_user(context, username) {
            const uri = process.env.BASE_URL + 'users/' + username

            this.state.api.client.get(uri)
                .then(function (response) {
                    context.commit("UPDATE_ACTIVE_USER", response.data)
                }).catch(function (error) {
                    context.commit('HANDLE_ERROR', error.response);
                })
        },
        fetch_following_data(context, token) {
            let me_following_syntax = ':me|following'

            this.state.api.client.get(`${process.env.BASE_URL}search?query=${me_following_syntax}`, {
                headers: {
                    'Authorization': `Bearer ${this.state.access_token}`
                }
            }).then((response) => {
                console.log('LOAD_FOLLOWING_DATA', response.data.response)
                context.commit("LOAD_FOLLOWING_DATA", response.data)
            }).catch((error) => {
                context.commit('HANDLE_ERROR', error.response);
            })
        }
    }
}
