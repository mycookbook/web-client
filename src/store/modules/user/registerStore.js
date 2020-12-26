
export const registerStore = {
    state: () => ({
        success: false
    }),
    mutations: {
        SET_REGISTRATION_FORM_ERRORS(state, errObj) {
            if (errObj.name !== undefined) {
                this.state.form_errors.registration_form.fullName = errObj.name
            }
            if (errObj.email !== undefined) {
                this.state.form_errors.registration_form.email = errObj.email
            }
            if (errObj.password !== undefined) {
                this.state.form_errors.registration_form.password = errObj.password
            }
        },
        SHOW_SUCCESS_MESSAGE(state) {
            state.success = true
        },
        HIDE_SUCCESS_MESSAGE(state) {
            state.success = false
        },
        RESET_REGISTRATION_FORM(state) {
            this.state.form_errors.registration_form = {}
            state.success = false
        }
    },
    actions: {
        async register(context, payload) {
            context.commit('SET_LOADING_STATE', true)
            context.commit('RESET_REGISTRATION_FORM')
            
            await this.state.apiClient.post(process.env.BASE_URL + 'auth/register', {
                name: payload.fullName,
                email: payload.email,
                password: payload.password
            }, this.state.api_options.axios)
            .then(function (response) {
                context.commit('SHOW_SUCCESS_MESSAGE')
                context.commit('SET_LOADING_STATE', false)
            }).catch(function (error) {
                context.commit('HIDE_SUCCESS_MESSAGE')
                context.commit('SET_LOADING_STATE', false)
                context.commit('SET_REGISTRATION_FORM_ERRORS', error.response.data)
            });
        },
        reset_registration_form(context) {
            context.commit('RESET_REGISTRATION_FORM')
        }
    }
}
