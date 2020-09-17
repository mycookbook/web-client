<template>
  <div class="ui massive search search-container">
    <div class="ui icon large fluid input">
      <input @keyup="search" class="prompt" type="text" placeholder="Try &quot;flat tummy water recipe&quot;" />
      <i class="search icon sicon"></i>
    </div>
    <div class="search-results" v-show="searching">
		<div class="ui divided selection list" style="text-transform: capitalize;" v-if="results.length == 0">
			<div class="item description">
				no results
			</div>
		</div>
		<div v-else>
			<div class="ui divided selection list" style="text-transform: capitalize;">
				<a class="item" v-for="result in results" :href="getLink(result)">
					<div :class="getClass(result.resource_type)" style="text-transform: capitalize;">
						{{ result.resource_type }}
					</div>
					<em>{{ result.name }}</em>
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
		search() {
			this.results = []
			let query = event.target.value
			this.qStr = query
			
			axios.get(`${process.env.BASE_URL}search?query=${query}`)
			.then((response) => {
				this.results = response.data.response
			})
			.catch((error) => {
				console.log('error', error)
			})

			this.searching = (this.qStr)
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
	float: left;
	color: #0160CC!important;
	font-weight: 100!important;
	margin-right: 12px !important;
}
.prompt {
	font-weight: 300!important;
	line-height: 200%!important;
	padding-left:40px!important;
	border-radius: 0!important;
	border-top: none!important;
	border-left: none!important;
	border-right: none!important;
	/* box-shadow: 0 80px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
	background-color: #ffffff!important;
	font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.search-container {
	width: 80%;
	margin: auto;;
}
.selection .description {
	font-size: small;
}
.selection .description .meta{
	font-weight: bold;
}
</style>