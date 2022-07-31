<template>
	<div class="ui container">
		<Navigation />
		<div class="ui grid">
			<div class="sixteen wide computer column sixteen wide mobile column">
				<div class="ui grid">
					<div class="three wide computer column sixteen wide mobile hidden column">
						<LeftSideMenu :active_user="active_user" />
					</div>
					<div class="eight wide computer column sixteen wide mobile column" style="border:1px solid #f1f1f1;border-radius: 8px; width: 100%; height: auto;">
						<DashboardBreadcrumb :active="activeLink" />
						<div class="ui horizontal divider"></div>

						<hr /><br />

						<div class="ui grid">
							<div class="sixteen wide computer column sixteen wide mobile column">
								<div v-if="activeLink === 'Cookbooks'">
									My cookbooks
								</div>
								<div v-if="activeLink === 'Recipes'">
									My recipes
								</div>
								<div v-if="activeLink === 'Drafts'">
									My drafts
								</div>
								<div v-if="activeLink === 'Privacy Settings'">
									My privacy settings
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
	</div>
</template>

<script>
import Navigation from './Navigation.vue';
import LeftSideMenu from './LeftSideMenu.vue'
import Breadcrumb from './Breadcrumb.vue';
import DashboardBreadcrumb from './DashboardBreadcrumb.vue';

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
	components: {
		Navigation,
		LeftSideMenu,
		Breadcrumb,
		DashboardBreadcrumb
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>