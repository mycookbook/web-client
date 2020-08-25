<template>
<div class="ui container">
	<Navigation />
	<div class="ui grid">
		COMING SOON
	</div>
	<Contact />
	<Bottom />
</div>
</template>

<script>
import Navigation from './Navigation'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
	name: "ChildComponent",
	data() {
		return {}
	},
	components: {
		Navigation,
		Contact,
		Bottom
	}
};
</script>

<style scoped>
.container {
	margin-top:23vh;
}
</style>