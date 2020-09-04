<template>
<div>
	<div class="search-banner">
		<div class="mobile hidden">
			<div class="seven wide column caption-text">
			<span class="explore">Discover thousands of</span>
			<span class="food-recipes">Recipes</span>
		</div>
		<div class="action-text">
			food &amp; drink.
		</div>
		</div>
		<div class="sixteen wide mobile only column">
			<div class="sixteen wide column caption-text-mobile">
				<span class="explore">Discover Recipes</span>
			</div>
		</div>
		<AutoComplete />
	</div>
</div>
</template>

<script>
import AutoComplete from './AutoComplete.vue'

export default {
	data () {
		return {}
	},
	props: {
		filters: Array,
		cookbooks: Array
	},
	components: {
		AutoComplete: AutoComplete
	}
}
</script>

<style>
.food-recipes {
	color: #0160CC!important;
}
.caption-text {
	font-size: 60px;
	font-weight: 900;
	text-align: center;
}
.caption-text-mobile {
	font-size: 30px;
	font-weight: 900;
	text-align: center;
	margin: 40px;
}
.action-text {
	font-weight: 300;
	text-align: center;
	padding: 65px;
	font-size: calc(30px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.search-banner {
	margin-top: 25vh!important;
}
</style>
