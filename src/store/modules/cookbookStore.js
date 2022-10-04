export const cookbookStore = {
    state: () => ({
        cookbooks: [],
        cookbook: {},
        definitions: {
            categories: [],
            nutritional_details: []
        },
        sorted: [],
        seeMore: true
    }),
    mutations: {
        STORE_COOKBOOKS(state, cookbooks) {
            state.cookbooks = cookbooks
            localStorage.setItem("unfiltered", JSON.stringify(cookbooks)) //immutable state for filtering through cookbooks list
        },
        STORE_DEFINITIONS(state, definitions) {
            state.definitions.categories = definitions[0]
            state.definitions.nutritional_details = definitions[1]
        },
        SORT(state, payload) {
            const unfiltered = JSON.parse(localStorage.getItem("unfiltered"))
 
            if (payload === 'all') {
                state.cookbooks = unfiltered
            } else if (payload === 'location') {
                state.cookbooks = unfiltered
                const filtered = state.cookbooks.filter((c) => {
                    this.state.api.client
                    .get(this.state.named_urls.ipInfo.uri + '?token=' + this.state.named_urls.ipInfo.token)
                    .then(response => (localStorage.setItem('selectedFlag', response.data.country)))
                    return c.flag.flag === localStorage.getItem('selectedFlag').toLowerCase()
                })
                state.cookbooks = filtered
            } else {
                state.cookbooks = unfiltered
                const filtered = state.cookbooks.filter((c) => {
                    if (c.categories.length > 0) {
                        let filteredCategories = JSON.parse(JSON.stringify(c.categories))
                        for (let i=0; i < filteredCategories.length; i++){
                            if (filteredCategories[i].slug === payload) {
                                return filteredCategories
                            }
                        }
                    }
                })
                state.cookbooks = filtered
            }
        },
        UPDATE_COOKBOOK_STATE(state, newState) {
			this.state.cookbook = newState
        },
        SEE_MORE_OR_LESS(state) {
            state.seeMore = !state.seeMore
        }
    },
    actions: {
        sort(context, payload) {
            context.commit('SORT', payload)
        },
        see_more_or_less(context) {
            context.commit('SEE_MORE_OR_LESS')
        },
        async fetch_cookbook(context, cookbookId) {
            context.commit("SET_LOADING_STATE", true)

            const uri = this.state.named_urls.cookbook_resources + '/' + cookbookId

            await this.state.api.client.get(uri, this.state.api.options)
            .then(function (response) {
                context.commit('UPDATE_COOKBOOK_STATE', response.data)
				context.commit("SET_LOADING_STATE", false)
            }).catch(function (error) {
                context.commit("SET_LOADING_STATE", false)
            })
        },
        create_cookbook(context, payload) {
            context.commit("SET_LOADING_STATE", true)

            const uri = this.state.named_urls.cookbook_resources

            let url = process.env.BASE_URL + 'cookbooks';

			this.state.api.client.post(url, payload, this.state.api.options)
			.then(function (response) {
                // if (response.data.updated) {
				// 	context.commit('INCREMENT_CLAP', response.data.claps)
				// }
                console.log('r', response.data)
            }).catch(function (error) {
                let res_status = error.response.status
                console.log('error', error.response.status)
            })
        },
        save_as_draft(context, payload) {
            context.commit("SET_LOADING_STATE", true)
        },
    }
}
