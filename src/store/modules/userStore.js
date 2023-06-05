
export const userStore = {
    state: () => ({
        success: false
    }),
    mutations: {
        LOAD_WHO_TO_FOLLOW_LIST(state) {
            this.state.who_to_follow = [{
                followers: '67K',
                author: "Ivah Becker",
                avatar: "https://st4.depositphotos.com/1017986/25404/i/600/depositphotos_254046280-stock-photo-happy-male-indian-chef-in.jpg",
                handle: "mummy-obiora",
            }, {
                followers: '1M',
                author: "Presh Amit",
                avatar: "https://st4.depositphotos.com/1017986/25404/i/600/depositphotos_254046280-stock-photo-happy-male-indian-chef-in.jpg",
                handle: "test-user",
            }, {
                followers: '10K',
                author: "Eulah Durgan",
                avatar: "https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg",
                handle: "edmond-olson",
            }
            ].sort(() => Math.random() - 0.5);
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
                context.commit('LOAD_WHO_TO_FOLLOW_LIST')
            }).catch(function (error) {
                console.log('error', error.response)
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
        }
    }
}
