<template>
	<div>
		<Navigation />
		<div class="ui container">
			<div class="ui error message">
				<div class="header">
					Oops! it looks like there was an error
				</div>
				<br />
				<div>
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
			return this.$route.query.m
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