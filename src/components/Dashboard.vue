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
									<div>
										<UploadImage />
									</div>

									<div class="ui horizontal divider"></div>

									<div class="ui form">
										<div class="field">
											<label>How to prepare</label>
											<textarea placeholder="Step 1: Do something awesome"></textarea>
										</div>
									</div>

									<div class="ui horizontal divider"></div>
									<button class="fluid ui tbb button">Save</button>
									<div class="ui horizontal divider"></div>
									<div>
										<div>
											<small>
												<b>showing 100 results</b>
											</small>
										</div>
										<div class="ui horizontal divider"></div>
										<div>
											<div class="ui items">
												<div class="item">
													<div class="ui tiny image">
														<img src="https://tinyurl.com/aek9pjuw">
													</div>
													<div class="content">
														<a class="header" href="">Title</a>
														<div class="meta">
															<span>Truncated Description ...</span>
														</div>
														<div class="description">
															<p></p>
														</div>
													</div>
												</div>
												<div class="item">
													<div class="ui tiny image">
														<img
															src="https://cookbookshq.s3.us-east-2.amazonaws.com/87056075-7837-4a2a-90ad-6ac6d28f92c8.JPG">
													</div>
													<div class="content">
														<a class="header" href="">Title</a>
														<div class="meta">
															<span>Truncated Description ...</span>
														</div>
														<div class="description">
															<p></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div v-if="activeLink === 'Recipes'">
									My recipes
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
	</div>
</template>

<script>
import Navigation from './Navigation.vue';
import LeftSideMenu from './LeftSideMenu.vue'
import Breadcrumb from './Breadcrumb.vue';
import DashboardBreadcrumb from './DashboardBreadcrumb.vue';
import UploadImage from './UploadImage.vue';

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
		DashboardBreadcrumb,
		UploadImage
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>