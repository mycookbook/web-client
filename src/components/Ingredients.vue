<template>
<div>
	<Navigation />
</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "Ingredients",
	mounted() {},
	computed: {
		example() {
			return true
		}
	},
	props: {
		numbers: Array
	},
	data() {
		return {
			title: 'This is an Example component'
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