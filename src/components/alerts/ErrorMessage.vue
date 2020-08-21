<template>
<div v-show="hasError">
	<div class="ui message" v-bind:class="{ error: isError }" >
		<p id="status-msg" v-for="error in errorMessage">
			{{ error }}
		</p>
	</div>
</div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
		hasError: Boolean,
		isError: Boolean,
		errorMessage: Array,
		errors: Array
    },
    data () {
		return {}
	}
};
</script>

<style>
</style>