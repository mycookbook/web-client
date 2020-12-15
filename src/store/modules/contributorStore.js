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
            
            const uri = this.state.named_urls.user_resources + '/' + username

            await axios.get(uri, this.state.api_options.axios)
            .then(function (response) {
                context.commit("UPDATE_CONTRIBUTOR_OBJECT", response.data)
				context.commit("SET_LOADING_STATE", false)
            }).catch(function (error) {
                console.log('fetch contributor error', error.response)
            })
        }
    }
}
