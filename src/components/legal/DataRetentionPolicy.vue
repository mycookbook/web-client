<template>
<div>
	<Navigation />
	<div class="ui container" style="margin-top:18vh;">
		<div class="ui grid">
			<div class="sixteen wide column">
				<div>
					<h3>Data Retention Policy</h3>
				</div>
			</div>
          	<div class="sixteen wide column">
				<p>
					By using our website, you have agreed to adhere to our Data Retention Policy, <a href="/#/terms-and-conditions">Terms and Conditions</a> and <a href="/#/usage-policy">Usage Policy</a>.
				</p>
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
  components: {
    Navigation,
    Contact,
    Bottom
  }
}
</script>
