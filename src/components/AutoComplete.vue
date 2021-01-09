<template>
  <div class="ui massive search search-container">
    <div class="ui icon large fluid input">
      <input 
		v-model="query" 
		@keyup="search" 
		class="prompt" 
		type="text" 
		id="searchInput"
		placeholder="Try &quot;banana bread recipe&quot;" 
	  />
      <i class="search icon sicon"></i>
    </div>
    <div class="search-results" v-show="searching">
		<div class="ui divided selection list" style="text-transform: capitalize;" v-if="results.length == 0">
			<div class="item description">
				<small>
					no results. 
					<em>
						Know how to prepare <span id="qStr">{{ qStr }}</span>? <a href="/#/register">Add it</a>
					</em>
				</small>
				<hr />
			</div>
		</div>
		<div v-else>
			<div class="ui divided selection list capitalize">
				<a class="item" v-for="result in results.slice(0,5)" :href="getLink(result)">
					<div :class="getClass(result.resource_type)" style="text-transform: capitalize;">
						{{ result.resource_type }}
					</div>
					<em>
						<span>
							{{ result.name }}
						</span>
						<span v-if="result.resource_type == 'recipe' && result.is_orderable ">
							<small class="ui mini label">
								Available for placing orders
							</small>
						</span>
					</em>
					<div class="description">
						<span class="ui left floated" v-if="result.resource_type == 'cookbook'">
							{{ result.description | truncate(115, '...') }}
						</span>
						<span class="ui left floated" v-if="result.resource_type == 'recipe'">
							{{ result.summary | truncate(115, '...') }}
						</span>
						<span class="ui right floated meta" v-if="result.resource_type == 'cookbook'">
							<img class="ui mini image" :src="result.bookCoverImg">
						</span>
						<span class="ui right floated meta" v-if="result.resource_type == 'recipe'">
							<img class="ui mini image" :src="result.imgUrl">
						</span>
						<span class="ui right floated meta" v-if="result.resource_type == 'recipe_variation'">
							<img class="ui mini image" :src="result.imgUrl">
						</span>
					</div>
				</a>
			</div>
			<div class="fluid ui button">
				<router-link :to="{
					name: 'SearchResults',
					query: { q: qStr }
				}">
					View all
				</router-link>	
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			searching: false,
			qStr: '',
			results: [],
			base: '/#/',
			query: ''
		};
	},
	filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
	methods: {
		search(e) {
			if (this.query.length > 3) {
				if (e.which == 13) {
					this.$store.dispatch('post_to_ml_endpoint', this.query)
				}

				this.results = []
				let query = event.target.value
				this.qStr = this.query

				axios.get(`${process.env.BASE_URL}search?query=${this.query}`, {
					headers: {
						'X-API-KEY': "SijjocvGGcgnXVbXzSoVtmN5qPor0jl8PnlRJ25U26JCODpoyi"
					}
				}).then((response) => {
					if (Object.keys(this.results).length == 0 ) {
						this.results = response.data.response
						this.$store.dispatch('post_to_ml_endpoint', this.query)
					}
				}).catch((error) => {
					console.log('search error', error.response.data)
				})

				this.searching = (this.qStr)
			}
		},
		getClass(type) {
			let style = 'ui horizontal label'

			if (type == 'cookbook') {
				style += ' red'
			}

			if (type == 'recipe') {
				style += ' purple'
			}

			if (type == 'recipe_variation') {
				style += ' teal'
			}

			return  style
		},
		getLink(item) {
			let link = ''

			if (item.resource_type == 'cookbook') {
				link = this.base + 'cookbook/' + item.id
			}

			if (item.resource_type == 'recipe') {
				link = this.base + 'cookbook/' + item.cookbook_id + '/recipe/' + item.id 
			}

			if (item.resource_type == 'recipe_variation') {
				link = this.base + 'recipe/' + item.recipe_id + '/varieties/' + item.id 
			}
			
			return link
		}
	},
};
</script>

<style>
.sicon {
	color: #0160CC;
}
.prompt {
	font-weight: 300;
	line-height: 200%;
	padding-left:40px;
	border-radius: 0!important;
	border-top: none!important;
	border-left: none!important;
	border-right: none!important;
	background-color: #ffffff!important;
}
.search-container {
	width: 80%;
	margin: auto;;
}
.selection .description {
	font-size: small;
}
.selection .description .meta {
	font-weight: bold;
}
#qStr {
	background-color: yellow!important;
}
.capitalize {
	text-transform: capitalize;
}
#searchInput::placeholder {
  font-size: 0.8em;
  color: #eeeeee;
  font-style: italic;
}

</style>