<template>
<div>
	<h2>{{ title }}</h2>
	<SomeCompoent />
</div>
</template>

<script>
import SomeCompoent from './SomeCompoenent.vue';

export default {
	name: "ChildComponent",
	mounted() {},
	computed: {
		example() {
			return true
		}
	}
	props: {
		numbers: Array
	},
	data() {
		return {
			title: 'This is an Example component'
    	}
  	},
	methods: {
		exampleMethod(var) {}
	},
	filters: {
		exampleFilter() {}
	},
	components: {
		SomeCompoent
	}
};
</script>

<style scoped>
.example-class {
	color: #000000;
}
</style>