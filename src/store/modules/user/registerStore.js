import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

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
            
            await axios.post(process.env.BASE_URL + 'auth/register', {
                name: payload.fullName,
                email: payload.email,
                password: payload.password
            }, {
                headers: {
                    'X-API-KEY': process.env.REQUEST_HEADERS.API_KEY,
                    'X-CLIENT-SECRET': process.env.REQUEST_HEADERS.API_SECRET
                }
            }).then(function (response) {
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
