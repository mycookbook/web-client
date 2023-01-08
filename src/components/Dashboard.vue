<template>
	<div class="ui container">
		<Navigation />
		<div class="ui grid">
			<div class="sixteen wide computer column sixteen wide mobile column">
				<div class="ui grid">
					<div class="three wide computer column sixteen wide mobile hidden column">
						<LeftSideMenu />
					</div>
					<div class="eight wide computer column sixteen wide mobile column"
						style="border:1px solid #f1f1f1;border-radius: 8px; width: 100%; height: auto;">
						<DashboardBreadcrumb :active="activeLink" />
						<div class="ui horizontal divider"></div>
						<br />
						<div class="ui grid">
							<div class="sixteen wide computer column sixteen wide mobile column">
								<div v-if="activeLink === 'Cookbooks'">
									<MyRecipes />
								</div>
								<div v-if="activeLink === 'Recipes'">
									<MyRecipes />
								</div>
								<div v-if="activeLink === 'Drafts'">
									<MyDrafts :active_user=active_user />
								</div>
								<div v-if="activeLink === 'Preferences'">
									<p>TBD</p>
									<p>- prefered default cookbook</p>
									<p>- prefered cover photo tool i.e image upload or imagelink from stockphoto service
										etc</p>
								</div>
								<div v-if="activeLink === 'Privacy Settings'">
									<div>
										<form class="ui form">
											<div class="field">
												<div class="ui checkbox">
													<input type="checkbox" tabindex="0" class="hidden">
													<label>Allow direct messaging from annonymous users on the
														platform</label>
												</div>
											</div>
											<div class="field">
												<div class="ui checkbox">
													<input type="checkbox" tabindex="0" class="hidden" disabled>
													<label>Allow other users contribute to my cookbooks</label>
													<div class="ui mini message">
														<em>This is a Premium feature. All cookbooks are public by
															default
															i.e users on this platform are able to freely add recipes to
															any
															cookbook. Upgrade your subscription to have control over
															this.</em>
													</div>
												</div>
											</div>
											<button class="ui tbb button" type="submit">Submit</button>
											<button class="ui red button" type="submit">Delete My Account</button>
										</form>
									</div>
								</div>
								<div v-if="activeLink === 'Display Settings'">
									<p>
										Enable/Disable Dark Mode
									</p>
									<DarkModeSwitch @switched="onSwitched" :initialState="isDarkModeEnabled" />
								</div>
								<div v-if="activeLink === 'Notifications'">
									My notifications
								</div>
								<div v-if="activeLink === 'Profile'">
									{{ _activeUser }}
									<!-- <Profile :_activeUser="_activeUser" /> -->
								</div>
							</div>
						</div>
					</div>
					<div class="five wide computer column sixteen wide mobile column">
						<div class="ui grid">
							<div class="sixteen wide computer column sixteen wide mobile column">
								<ThreehundredByTwofifty />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Contact />
		<Bottom />
	</div>
</template>

<script>
import Navigation from './Navigation.vue';
import LeftSideMenu from './LeftSideMenu.vue'
import Breadcrumb from './Breadcrumb.vue';
import DashboardBreadcrumb from './DashboardBreadcrumb.vue';
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'
import MyCookbooks from './MyCookbooks.vue'
import MyRecipes from './MyRecipes.vue';
import MyDrafts from './MyDrafts.vue';
import Profile from './Profile.vue';
import DarkModeSwitch from 'vue-dark-mode-switch'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css';
import ThreehundredByTwofifty from './Ads/300X250.vue'

export default {
	name: "Dashboard",
	computed: {
		activeLink() {
			return this.$route.query.tab
		},
		_activeUser() {
			return this.$store.state.active_user
		}
	},
	data() {
		return {
			uploadMessageDescription: "Upload Cookbook Cover Image",
			isDarkModeEnabled: true
		}
	},
	components: {
		Navigation,
		LeftSideMenu,
		Breadcrumb,
		DashboardBreadcrumb,
		DarkModeSwitch,
		Contact,
		Bottom,
		MyCookbooks,
		MyRecipes,
		MyDrafts,
		Profile,
		ThreehundredByTwofifty
	},
	methods: {
		onSwitched: function (isSwitched) {
			console.log('dark mode is enabled :', isSwitched);
		}
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>
