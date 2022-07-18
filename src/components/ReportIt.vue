<template>
	<div>
		<Navigation />
		<div class="ui large red button" :title="title">
			<small>Report it!</small>
		</div>
	</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "ReportIt",
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
			title: "Use this tool if you think this recipe is any of the following; inappropriate, unauthentic, not original, stolen or a duplicate. If you think this content was stolen and you can prove it, kindly provide as much detail as possible to enable us investigate and delete the content from our servers. Alternatively, you can register to become a cookbook contributor and then ownership will be transffered to you upon request."
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