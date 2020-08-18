<template>
<div>
	<Navigation />
	<div class="ui container" style="margin-top:18vh;">
		<div class="ui grid">
			<div class="sixteen wide column">
				<div>
					<h3>Terms &amp; Conditions</h3>
				</div>
			</div>
          	<div class="sixteen wide column">
				<p>
					By using our website, you have agreed to adhere to our Terms and Conditions, <a href="/#/usage-policy">Usage Policy</a> and <a href="/#/usage-policy">Data Rentention Policy</a>
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
