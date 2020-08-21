import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const subscriptionStore = {
    state: () => ({
        loadingBtn: {
            state: false
        },
        hasError: false,
        errorMsg: []
    }),
    mutations: {
        SET_BTN_LOADING_STATE(state) {
            state.loadingBtn.state = true
        },
        ERROR_HAS_OCCURRED(state, msg) {
            state.loadingBtn.state = false
            state.hasError = true
            state.errorMsg = msg
        },
        SUBSCRIPTION_SUCCESS(state) {
            state.loadingBtn.state = false
            // state.hasError = false
            state.errorMsg = ['Qapla!']
        }
    },
    actions: {
        subscribeUser(context, payload) {
            context.commit('SET_BTN_LOADING_STATE')

            let url = process.env.BASE_URL + '/subscriptions'
            axios.post(url, {
                email: payload
            })
            .then(function (response) { // handle success
                context.commit('SUBSCRIPTION_SUCCESS')
            })
            .catch(function (error) { // handle error
                console.log(error)
                context.commit('ERROR_HAS_OCCURRED', error.response.data.email)
            })
        }
    }
}
