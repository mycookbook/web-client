<template>
	<div class="ui container">
		<Navigation />
		<div class="ui grid">
			<div class="sixteen wide computer column sixteen wide mobile column">
				<div class="ui grid">
					<div class="two wide computer column sixteen wide mobile hidden column">
						<LeftSideMenu :active_user="active_user" />
					</div>
					<div class="nine wide computer column sixteen wide mobile column" style="border:1px solid #f1f1f1;border-radius: 8px; width: 100%; height: auto;">
						<div class="ui grid">
							<div class="thirteen wide computer column sixteen wide mobile column">
								<div class="ui mini breadcrumb">
									<a class="section">Dashboard</a>
									<i class="right chevron icon divider"></i>
									<div class="active section">Cookbooks</div>
								</div>
							</div>
							<div class="three wide computer column sixteen wide mobile column">
								<div class="ui mini tbb button">
									<i class="ui plus icon"></i>
									Create
								</div>
							</div>
						</div>

						<div class="ui horizontal divider"></div>
						<hr />
						<br />
						<div class="ui grid">
							<div class="sixteen wide computer column sixteen wide mobile column">
								list cookbooks here
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

export default {
	name: "Dashboard",
	props: {
		numbers: Array
	},
	computed: {
		active_user() {
			return this.$store.state.active_user
		}
	},
	components: {
		Navigation,
		LeftSideMenu,
		Breadcrumb
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>