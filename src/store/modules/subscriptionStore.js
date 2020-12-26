export const subscriptionStore = {
    state: () => ({
        success: false
    }),
    mutations: {
        SET_CONTACT_FORM_ERRORS(state, errObj) {
            if (errObj.email !== undefined) {
                this.state.form_errors.contact_form.email = errObj.email
            }
        },
        RESET_CONTACT_FORM(state) {
            this.state.form_errors.contact_form = {}
            state.success = false
        },
        SHOW_SUCCESS_MESSAGE(state) {
            state.success = true
        }
    },
    actions: {
        async subscribeUser(context, payload) {
            context.commit('SET_LOADING_STATE', true)
            context.commit('RESET_CONTACT_FORM')

            const url = process.env.BASE_URL + 'subscriptions'

            await this.state.apiClient.post(url, {
                email: payload
            }, {
                headers: {
                    'X-API-KEY': process.env.API_KEY,
                    'X-CLIENT-SECRET': process.env.API_SECRET
                }
            }).then(function (response) {
                context.commit('SHOW_SUCCESS_MESSAGE')
                context.commit('SET_LOADING_STATE', false)
            }).catch(function (error) {
                context.commit('SET_LOADING_STATE', false)
                context.commit('SET_CONTACT_FORM_ERRORS', error.response.data)
            });
        },
        reset_contact_form(context) {
            context.commit('RESET_CONTACT_FORM')
        }
    }
}
