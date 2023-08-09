<template>
<div class="categories-quick-search-wrapper">
	<div class="ui grid">
		<div class="ui sixteen wide computer column sixteen wide tablet column sixteen wide mobile column">
			<h3>
				Explore latest cookbooks
			</h3>
		</div>
	</div>
	<div class="ui grid">
		<div class="sixteen wide computer column sixteen wide tablet column mobile hidden">
			<div class="ui secondary menu flex-container" v-if="filters">
				<a class="active item tbb" id="all" @click="getCategoryName('all')">All</a>
				<a 
					class="item" 
					:id="filter.slug" 
					@click="getCategoryName(filter.slug)" 
					v-for="filter in filters" :title="filter.name">
					{{ filter.name }}
				</a>
				<a class="item" id="location" @click="getCategoryName('location')">Current Location</a>
				<a class="item" title="view all">
					<i class="ellipsis horizontal icon"></i>
				</a>
			</div>
		</div>
	</div>
	<div class="ui grid">
		<div class="ui sixteen wide mobile column mobile only" v-if="filters">
			<select class="ui search fluid dropdown" style="font-size: 0.7em!important;" v-on:change="doSomething()" v-model="searchBy">
				<option value="all">All</option>
				<option v-for="filter in filters" :value="filter.slug">
					{{ filter.name }}
				</option>
				<option value="location">Current Location</option>
			</select>
		</div>
	</div>
</div>
</template>

<script>
import store from '@/store'

export default {

	props: {
		filters: Array
	},
	data() {
		return {
			searchBy: "all"
		}
	},
	methods: {
		getCategoryName: function(category) {
			this.selectActive(category)
			this.$store.dispatch('sort', category)
		},
		selectActive: function(category) {
			$(".item").removeClass("active")
			$(".item").removeClass("tbb")
			let el = "#" + category
			$(el).addClass("active")
			$(el).addClass("tbb")
		},
		doSomething() {
			this.getCategoryName(this.searchBy)
		}
	}
}
</script>

<style scoped>
.categories-quick-search-wrapper {
	margin-top: 5%!important;
	background-color: #fcfcfc!important;
	padding:4%!important;
}
.categories-quick-search-wrapper p {
	color: #999999!important;
	font-weight: 300;
}
.flex-container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
.categories-quick-search-wrapper h3 {
	margin-top: 0px !important;
    margin-bottom: 30px !important;
    font-size: 22px !important;
    line-height: 26px !important;
    font-weight: 600 !important;
}
</style>
