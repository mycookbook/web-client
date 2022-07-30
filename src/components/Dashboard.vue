<template>
<div class="ui container">
	<Navigation />
	<div>I am Dashboard</div>
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
.container {
	margin-top: 23vh;
}
</style>