<template>
<div>
    <Navigation />
    <div class="ui container" style="margin-top:10%;">
        {{ recipe.author.contributions }}
    </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "CookbooksBy",
	mounted() {},
	computed: {
		recipe() {
			return this.$store.state.recipe
		}
	},
	props: {
		numbers: Array
	},
	data() {
		return {
			title: 'My cookbooks'
    	}
  	},
	filters: {
		exampleFilter() {}
	},
	components: {
		Navigation
	}
};
</script>

<style scoped>
.example-class {
	color: #000000;
}
</style>