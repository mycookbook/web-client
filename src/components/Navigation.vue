<template>
	<div>
		<div class="ui top fixed menu grid mobile hidden">
			<div class="six wide tablet column six wide computer column tvn no padding">
				<div class="tvn clipped brand">
					<a href="/" class="ui massive fluid image" title="cookbookshq brand logo">
						<img class="logo" src="/static/transparent_logo.png" alt="cookbookinc brand logo">
					</a>
				</div>
			</div>
			<div class="ten wide right floated tablet column ten wide computer right floated column tvn no padding">
				<div class="selectors">
					<div class="ui secondary menu">
						<a class="item" title="Coming soon." href="/#/marketplace" id="marketplaceNavBtn">
							<i class="blue usd icon"></i> Go to Marketplace
						</a>
						<div v-if="isLoggedIn">
							<div class="ui button tbb tablet hidden" @click="logOut()" id="logoutBtn">
								Logout
							</div>
							<router-link :to="{ name: 'Dashboard', query: { tab: 'Recipes' } }">
								<div class="ui button tbb tablet hidden" id="dashboardBtn">
									My Dashboard
								</div>
							</router-link>
						</div>
						<div v-else>
							<router-link :to="{
								name: 'Register'
							}">
								<button class="ui button tbb tablet hidden" id="signinBtn">
									Sign in To Contribute
								</button>
								<button class="ui button tbb tablet only">
									<small>
										Register
									</small>
								</button>
							</router-link>
						</div>
						<a class="item"></a>
					</div>
				</div>
			</div>
		</div>
		<MobileNavigation />
	</div>
</template>

<script>

import MobileNavigation from "./MobileNavigation.vue";

export default {
	computed: {
		isLoggedIn() {
			return (this.$store.state.access_token);
		},
	},
	methods: {
		logOut: function () {
			this.$store.dispatch('logout')
		}
	},
	components: {
		MobileNavigation
	}
};
</script>

<style>
.tbb {
	background-color: #0160CC !important;
	color: white !important;
	font-weight: 300 !important;
}

.item {
	font-weight: 300 !important;
	letter-spacing: 0.05em !important;
	font-size: 18px !important;
}

.top.fixed.menu {
	border-bottom: none !important;
	padding-top: 50px !important;
}

body {
	background: transparent !important;
}

.brand-logo {
	margin-top: -4vh !important;
	margin-left: 25px !important;
}
</style>