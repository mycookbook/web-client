<template>
<div>
	<div class="search-banner">
		<div class="ui grid center aligned">
			<div class="sixteen wide computer column sixteen wide tablet column sixteen wide mobile column">
				<div class="discover">
					<span>Discover thousands of</span>
					<span class="biro-blue">Recipes</span>
				</div>
			</div>
		</div>
		<div class="ui grid center aligned">
			<div class="sixteen wide computer column sixteen wide tablet column sixteen wide mobile column">
				<div class="food-drink">
					food &amp; drink.
				</div>
			</div>
		</div>
		<AutoComplete />
	</div>
</div>
</template>

<script>
import AutoComplete from './AutoComplete.vue'

export default {
	components: {
		AutoComplete: AutoComplete
	}
}
</script>

<style>
.biro-blue {
	color: #0160CC!important;
}
.discover {
	font-size: 60px;
	font-weight: 900;
	line-height: 1.1em!important;
}
.food-drink {
	font-weight: 300;
	padding: 10px 0 65px 0;
	font-size: calc(30px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.search-banner {
	margin-top: 25vh!important;
}
</style>
