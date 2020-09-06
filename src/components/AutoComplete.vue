<template>
  <div class="ui massive search search-container">
    <div class="ui icon large fluid input">
      <input @keyup="search" class="prompt" type="text" placeholder="Try &quot;flat tummy water recipe&quot;" />
      <i class="search icon sicon"></i>
    </div>
    <div class="search-results" v-show="searching">
		<div v-if="!results">
			no results
		</div>
		<div v-else>
			<div class="ui divided selection list" style="text-transform: capitalize;">
				<a class="item" v-for="result in results" href="/#/cookbook/1">
					<div :class="getClass(result.resource_type)" style="text-transform: capitalize;">
						{{ result.resource_type }}
					</div>
					<em>{{ result.name }}</em>
					<div class="description">
						<span class="ui left floated">
							short description not more than 150 characters long
						</span>
						<span class="ui right floated statistic">
							2.8K recipes
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
			Href: '/#/',
		};
	},
	methods: {
		search() {
			this.results = []
			let query = event.target.value
			this.qStr = query
			
			axios.get(`${process.env.BASE_URL}/search?query=${query}`)
			.then((response) => {
				console.log('results', response.data.response)
				this.results = response.data.response
			})
			.catch((error) => {
				console.log('error', error)
			})

			if (this.qStr) {
				this.searching = true
			} else {
				this.searching = false
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
.selection .description .statistic{
	font-weight: bold;
}
</style>