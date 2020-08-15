import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const subscriptionStore = {
    state: () => ({}),
    mutations: {
        SUBSCRIPTION_ERROR() {
            state.error = true
            $("#contact-card").addClass("error");
            $("#loading-btn").removeClass("loading")
        },
        SUBSCRIPTION_SUCCESS() {
            state.error = false
            $("#status-header").show()
            $("#status-msg").text('You will now recieve weekly updates in your email.')
            $("#subscription-state").addClass("success")
            $("#contact-card").removeClass("error");
            $("#subscription-state").removeClass("hidden")
            $("#loading-btn").removeClass("loading")
        }
    },
    actions: {
        subscribeUser(context, payload) {
            let url = process.env.BASE_URL + '/subscriptions'
            axios.post(url, {
                email: payload
            })
            .then(function (response) {// handle success
                context.commit('SUBSCRIPTION_SUCCESS')
            })
            .catch(function (error) {// handle error
                $("#subscription-state").removeClass("hidden")
                $("#subscription-state").removeClass("success")
                $("#subscription-state").addClass("error")
                $("#status-header").hide()
                $("#status-msg").text(error.response.data.email)
    
                context.commit('SUBSCRIPTION_ERROR')
            })
            .then(function () {
                // always executed
            });
        }
    },
    getters: {}
}
