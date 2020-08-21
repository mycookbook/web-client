<template>
<div v-show="completed">
	<div class="ui message error" v-if="hasError">
		<ul v-for="error in errors">
			<li>
				{{ error }}
			</li>
		</ul>
	</div>
	<div class="ui message success" v-else>
		<ul>
			{{ success }}
		</ul>
	</div>
</div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
		hasError: Boolean,
		completed: Boolean,
		errors: Array,
		success: String
    },
    data () {
		return {}
	}
};
</script>

<style>
</style>