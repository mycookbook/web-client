<template>
<div class="ui container">
	<Navigation />
	<div>
		cookbook in edit mode
	</div>
</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "EditCookbook",
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
.container {
	margin-top: 23vh;
}
</style>