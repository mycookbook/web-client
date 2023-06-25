<template>
	<div>
		<Navigation />
	</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "Example",
	mounted() { },
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
		exampleFilter() { }
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