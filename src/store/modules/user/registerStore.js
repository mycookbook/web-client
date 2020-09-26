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
        successMsg: ''
    }),
    mutations: {
        SET_BTN_LOADING_STATE(state) {
            state.loadingBtn.state = true
        },
        ERROR_HAS_OCCURRED(state, errObj) {
            state.loadingBtn.state = false
            state.hasError = true
            state.errorMsg = Object.values(errObj)
            state.completed = true
        },
        REGISTRATION_SUCCESS(state) {
            state.loadingBtn.state = false
            state.hasError = false
            state.completed = true
            state.successMsg = 'Congratulations, you have successfully created an account. A confirmation email is coming to your inbox soon. Make sure you click the link to confirm your email so you can start creating those very special recipes.'
        },
        RESET_STORE_STATES(state) {
            state.loadingBtn.state = false
            state.hasError = false
            state.errorMsg = []
            state.successMsg = ''
            state.completed = false
        }
    },
    actions: {
        register(context, payload) {
            context.commit('SET_BTN_LOADING_STATE')

            let url = process.env.BASE_URL + 'auth/register'
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
        },
        reset_states(context) {
            context.commit('RESET_STORE_STATES');
        }
    },
    getters: {
        get_user: (state) => (cookbookId, recipeId, username) => {
            let cookbooks = localStorage.getItem('cookbooks')
            let cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            let recipe = cookbook.recipes.find(y => (y.id === parseInt(recipeId)))
            
            return recipe.author
        }
    }
}
