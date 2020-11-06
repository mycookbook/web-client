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
					By using our website, you have agreed to adhere to our Terms and Conditions, <a href="/#/usage-policy" :title="getDefaultUsagePolicyContents">Usage Policy</a> and <a href="/#/usage-policy" :title="getDefaultDataRententionPolicyContents">Data Rentention Policy</a>
				</p>
				<p>
					Use the <a href="/#/report-it" :title="getReportItToolInfo">report it</a> tool to report a content that is inappropriate, stolen or a duplicate.
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
	computed: {
		getDefaultDataRententionPolicyContents() {
			return 'Cookbooks HQ Data Retention Policy. Property of cookbookshq.com'
		},
		getDefaultUsagePolicyContents() {
			return 'Cookbooks HQ Usage Policy. Property of cookbookshq.com'
		},
		getReportItToolInfo() {
			return 'Use this tool to report a recipe that is inappropriate, stolen or a duplicate. Property of cookbookshq.com'
		}
	},
	components: {
		Navigation,
		Contact,
		Bottom
	}
}
</script>
