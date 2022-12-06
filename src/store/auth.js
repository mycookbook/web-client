import axios from "axios"

export default {
    namespaced: true,

    state: {
        token: null,
        user: null,
    },

    getters: {
        authenticated (state){
            return state.token && state.user
        },

        users (state){
            return state.user
        } 
    },

    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },

        SET_USER(state, data){
            state.user = data
        }
    },

    actions: {
        async signIn ({ dispatch }, credentials) {
            let response = await axios.post('https://api.cookbookshq.com/api/v1/auth/login?', credentials)

            console.log(response.data)
            return dispatch('attempt', response.data.token)
            
        },

        async attempt ({ commit, state }, token) {
            if (token){
                commit('SET_TOKEN', token)
            }
            
            if (!state.token) {
                return
            }

            try {
                let response = await axios.post('https://api.cookbookshq.com/api/v1/auth/validate', {
                    
                   
                })
                
               
                commit('SET_USER', response.data)
            } catch (error) {
               
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }, 

    modules: {
    
    }
}