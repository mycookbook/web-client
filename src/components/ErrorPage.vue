<template>
	<div>
		<Navigation />
		<div class="ui container">
			<div class="ui error message">
				<i class="close icon"></i>
				<div class="header">
					{{ _errorMessage }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "ErrorPage",
	computed: {
		_errorMessage() {
			return this.$route.params.m
		}
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