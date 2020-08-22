<template>
<div v-show="completed">
	<div class="ui message error" v-show="hasError">
		<ul v-for="error in errors">
			<li>
				{{ error[0] }}
			</li>
		</ul>
	</div>
	<div class="ui message success" v-show="!hasError">
		<ul>
			{{ successMsg }}
		</ul>
	</div>
</div>
</template>

<script>
export default {
    name: "Alert",
    props: {
		hasError: Boolean,
		completed: Boolean,
		errors: Array,
		successMsg: String
    },
    data () {
		return {}
	}
};
</script>

<style>
</style>