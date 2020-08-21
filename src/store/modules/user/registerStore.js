import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const registerStore = {
    state: () => ({}),
    mutations: {
        SET_BTN_LOADING_STATE(state) {
            state.loadingBtn.state = true
        }
    },
    actions: {
        registerUser(context, payload) {
            context.commit('SET_BTN_LOADING_STATE')
        }
    },
    getters: {}
}
