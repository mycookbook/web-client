import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueResource);

export const contributorStore = {
    state: () => ({
		contributor: {}
	}),
    mutations: {
        UPDATE_CONTRIBUTOR_OBJECT(state, newState) {
			this.state.contributor = newState.data.user[0]
		}
    },
    actions: {
        async fetch_contributor(context, username) {
            context.commit("SET_LOADING_STATE", true)

            await axios.get(this.state.named_urls.user_resources + '/' + username, {
                headers: {
                    'X-API-KEY': process.env.API_KEY,
                    'X-CLIENT-SECRET': process.env.API_SECRET
                }
            }).then(function (response) {
                context.commit("UPDATE_CONTRIBUTOR_OBJECT", response.data)
				context.commit("SET_LOADING_STATE", false)
            }).catch(function (error) {
                // console.log('fetch contributor error', error.response)
            })
        }
    }
}
