<template>
<div class="ui container">
	<Navigation />
	<br /><br />
	<div>
		<div class="ui grid">
			<div class="ten wide computer column ten wide mobile column ten wide tablet column ten wide large screen column">
				CREATE COOKBOOK TOOL. YOU MUST BE LOGGED IN TO USE THIS TOOL.
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Navigation from './Navigation';

export default {
	name: "CreateRecipe",
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