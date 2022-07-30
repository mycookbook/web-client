<template>
<div>
	<Navigation />
</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "Dashboard",
	props: {
		numbers: Array
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