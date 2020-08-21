<template>
<div v-show="hasError">
	<div class="ui message" v-bind:class="{ error: errorClass }" >
		<ul v-for="error in errors">
			<li>
				{{ error }}
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
		hasError: Boolean,
		errorClass: Boolean,
		errors: Array
    },
    data () {
		return {}
	}
};
</script>

<style>
</style>