<template>
	<div class="ui container">
		<Navigation />
		<div class="ui grid">
			<div class="sixteen wide computer column sixteen wide mobile column">
				<div class="ui grid">
					<div class="three wide computer column sixteen wide mobile hidden column">
						<LeftSideMenu :active_user="active_user" />
					</div>
					<div class="eight wide computer column sixteen wide mobile column"
						style="border:1px solid #f1f1f1;border-radius: 8px; width: 100%; height: auto;">

						<DashboardBreadcrumb :active="activeLink" />

						<div class="ui horizontal divider"></div>

						<br />

						<div class="ui grid">
							<div class="sixteen wide computer column sixteen wide mobile column">
								<div v-if="activeLink === 'Cookbooks'">
									<MyCookbooks />
								</div>
								<div v-if="activeLink === 'Recipes'">
									<MyRecipes />
								</div>
								<div v-if="activeLink === 'Drafts'">
									<MyDrafts :active_user=active_user />
								</div>
								<div v-if="activeLink === 'Privacy Settings'">
									<div>
										<form class="ui form">
											<div class="field">
												<div class="ui checkbox">
													<input type="checkbox" tabindex="0" class="hidden">
													<label>Allow direct messaging from annonymous users on the platform</label>
												</div>
											</div>
											<div class="field">
												<div class="ui checkbox">
													<input type="checkbox" tabindex="0" class="hidden" disabled>
													<label>Allow other users contribute to my cookbooks</label>
													<div class="ui mini message">
														<em>This is a Premium feature. All cookbooks are public by default
														i.e users on this platform are able to freely add recipes to any
														cookbook. Upgrade your subscription to have control over this.</em>
													</div>
												</div>
											</div>
											<button class="ui tbb button" type="submit">Submit</button>
											<button class="ui red button" type="submit">Delete My Account</button>
										</form>
									</div>
								</div>
								<div v-if="activeLink === 'Notifications'">
									My notifications
								</div>
								<div v-if="activeLink === 'Profile'">
									<img class="ui circular image" :src="_myProfile.avatar" />
									<br />
									<form class="ui form">
										<h4 class="ui dividing header">
											Personal Info
										</h4>
										<div class="field">
											<label>Name</label>
											<div class="twelve wide field">
												<input type="text" name="fname" :placeholder="_myProfile.name" disabled>
											</div>
										</div>
										<div class="field">
											<label>Email</label>
											<div class="twelve wide field">
												<input type="text" name="email"
													placeholder="This email will be used for correspondence">
											</div>
										</div>
										<div class="field">
											<label>Pronouns (optional)</label>
											<div class="fields">
												<div class="twelve wide field">
													<input type="text" name="pronouns" placeholder="Your pronouns"
														:value="_myProfile.pronouns">
												</div>
											</div>
										</div>
										<div class="field">
											<label>Phone (Optional)</label>
											<div class="fields">
												<div class="twelve wide field">
													<input type="text" name="phone" placeholder="Your phone number">
												</div>
											</div>
										</div>
										<div class="ui tbb button" tabindex="0">Update</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="five wide computer column sixteen wide mobile column">
						<div class="ui grid">
							<div class="sixteen wide computer column sixteen wide mobile column">
								<img
									src="https://drdrew.com/wp-content/uploads/2017/08/ad-space-placeholder-300x250-300x250.png" />
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

export default {
	name: "Dashboard",
	computed: {
		active_user() {
			return this.$store.state.active_user
		},
		activeLink() {
			return this.$route.query.tab
		},
		_myProfile() {
			return this.$store.state.contributor
		}
	},
	data() {
		return {
			uploadMessageDescription: "Upload Cookbook Cover Image"
		}
	},
	components: {
		Navigation,
		LeftSideMenu,
		Breadcrumb,
		DashboardBreadcrumb,
		Contact,
		Bottom,
		MyCookbooks,
		MyRecipes,
		MyDrafts
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>