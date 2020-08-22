import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const registerStore = {
    state: () => ({
        loadingBtn: {
            state: false,
        },
        hasError: false,
        errorMsg: [],
        completed: false,
        successMsg: 'Congratulations, you have successfully created an account. A confirmation email is coming to your inbox soon. Make sure you click the link to confirm your email so you can start creating those very special recipes.'
    }),
    mutations: {
        SET_BTN_LOADING_STATE(state) {
            state.loadingBtn.state = true
        },
        ERROR_HAS_OCCURRED(state, msg) {
            state.loadingBtn.state = false
            state.hasError = true
            state.errorMsg = msg
            state.completed = true
        },
        REGISTRATION_SUCCESS(state) {
            state.loadingBtn.state = false
            state.hasError = false
            state.completed = true
        }
    },
    actions: {
        registerUser(context, payload) {
            context.commit('SET_BTN_LOADING_STATE')

            let url = process.env.BASE_URL + '/auth/register'
            axios.post(url, {
                name: payload.fullName,
                email: payload.email,
                password: payload.password
            })
            .then(function (response) { // handle success
                context.commit('REGISTRATION_SUCCESS')
            })
            .catch(function (error) { // handle error
                context.commit('ERROR_HAS_OCCURRED', error.response.data)
            })
        }
    }
}
