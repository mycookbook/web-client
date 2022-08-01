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
									No drafts.
								</div>
								<div v-if="activeLink === 'Privacy Settings'">
									My privacy settings
								</div>
								<div v-if="activeLink === 'Notifications'">
									My notifications
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

export default {
	name: "Dashboard",
	computed: {
		active_user() {
			return this.$store.state.active_user
		},
		activeLink() {
			return this.$route.query.tab
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
		MyRecipes
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>