<template>
<div>
	<Navigation />
	<div class="ui container" style="margin-top:18vh;">
		<div v-html="policy"></div>
		<Contact />
		<Bottom />
	</div>
</div>
</template>

<script>
import Navigation from '../Navigation.vue'
import Contact from '../Contact.vue'
import Bottom from '../Bottom.vue'

export default {
	computed: {
		policy() {
			return this.$store.getters['get_data_retention_policy']();
		}
	},
	components: {
		Navigation,
		Contact,
		Bottom
	}
}
</script>

<style scoped>
.grid label {
	font-weight:900!important;
}
</style>