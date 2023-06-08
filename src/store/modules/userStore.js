
export const userStore = {
    state: () => ({
        success: false
    }),
    mutations: {
        LOAD_WHO_TO_FOLLOW_LIST(state, data) {
            this.state.who_to_follow = data.sort(() => Math.random() - 0.5);
        }
    },
    actions: {
        follow_user(context, payload) {
            this.state.api.client.post(process.env.BASE_URL + 'follow', {
                'toFollow': payload.following
            }, {
                headers: {
                    'Authorization': `Bearer ${this.state.access_token}`
                }
            }).then(function (response) {
                context.commit('LOAD_WHO_TO_FOLLOW_LIST', response.data)
            }).catch(function (error) {
                console.log('error', error)
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
                window.location.href("/");
            }).catch(function (error) {

                if (error.response.status === 401) {
                    context.commit("LOGOUT")
                }

                context.commit('SET_LOADING_STATE', false)
            })
        },
        get_who_to_follow(context) {
            this.state.api.client.get(process.env.BASE_URL + 'who-to-follow', {
                headers: {
                    'Authorization': `Bearer ${this.state.access_token}`
                }
            }).then(function (response) {
                context.commit('LOAD_WHO_TO_FOLLOW_LIST', response.data)
            }).catch(function (error) {
                context.commit('HANDLE_ERROR', error.response);
            })
        }
    }
}
