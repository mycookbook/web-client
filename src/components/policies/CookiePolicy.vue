<template>
<div>
	<Navigation />
	<div class="ui container" style="margin-top:18vh;">
		<div class="ui grid">
			<div class="sixteen wide column">
				<div v-html="policy"></div>
			</div>
		</div>
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
			return this.$store.getters['get_cookie_policy']();
		}
	},
	components: {
		Navigation,
		Contact,
		Bottom
	}
}
</script>
