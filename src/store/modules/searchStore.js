import axios from 'axios';

export const searchStore = {
    state: () => ({
        results: []
    }),
    mutations: {
        SAVE_SEARCH_RESULTS(state, results) {
			state.results = results
        },
        EMPTY_RESULTS_OBJECT(state) {
            state.results = []
        }
    },
    actions: {
        async post_to_ml_endpoint(context, query) {
            let meta = {}

            await this.state.api.client.get(this.state.named_urls.ipInfo.uri + '?token=' + this.state.named_urls.ipInfo.token)
            .then(function (response) {
                meta.country = response.data.country
                meta.city = response.data.city
                meta.ip = response.data.ip
                meta.timezone = response.data.timezone
                meta.loc = response.data.loc
                meta.keyword = query
            })

            await this.state.api.client.post(process.env.BASE_URL + 'keywords', { 
                city: meta.city,
                country: meta.country,
                ip: meta.ip,
                keyword: meta.keyword,
                loc: meta.loc,
                timezone: meta.timezone
            }, this.state.api.options)
            .then(function (response) {
                // console.log('meta-data', response.data)
            }).catch(function (error) {
                // console.log('server error', error.response)
            });
        },
        async fetch_results(context, query) {
            await axios.get(`${process.env.BASE_URL}search?query=${query}`, {
                headers: {
                    'X-API-KEY': "SijjocvGGcgnXVbXzSoVtmN5qPor0jl8PnlRJ25U26JCODpoyi"
                }
            }).then((response) => {
                context.commit('SAVE_SEARCH_RESULTS', response.data.response)
            }).catch((error) => {
                // console.log('search error', error)
            })
        },
        empty_results_object(context) {
            context.commit('EMPTY_RESULTS_OBJECT')
        }
    },
    getters: {}
}
