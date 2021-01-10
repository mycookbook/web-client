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
		<div class="twelve wide tablet ten wide computer right floated column tvn no padding">
			<div class="selectors">
				<div class="ui right floated secondary menu">
						<!--<a class="item" 
						href="https://marketplace.cookbookshq.com"
						target="_blank"
						title="Coming soon."
						>
							<i class="cart icon"></i>
							Go to Marketplace
						</a>
						<a 
						class="item" 
						title="Coming soon.">
							<button class="ui light disabled red button">
								<i class="chart bar outline icon"></i> Calorie Counter 
								<sup>
									<i class="ui trademark icon"></i>
								</sup>
							</button>
						</a>-->
						<a 
						class="item" 
						title="Coming soon."
						href="https://www.youtube.com/channel/UCKRpHS0EFxGtgZ9l6UOsjOA/featured"
						>
							<div class="ui red button">
								<i class="youtube icon"></i> 
								<small style="font-weight:300!important;">Watch lastest Videos</small>
							</div>
						</a>
						<router-link :to="{
							name: 'Register'
						}">
						<a 
						v-if="!isRegistrationRoute"
						class="item" 
						title="Become a contributor by filling the sign up form and start submitting recipes. You can create your custom cookbooks or contribute to existing cookbooks. This is your personal space to be your creative you! Property of cookbookshq.com">
							<button class="ui button tbb">
								<small>
									<i class="plus icon"></i>
									Become a Contributor
								</small>
							</button>
						</a>
					</router-link>
					<a class="item"></a>
				</div>
			</div>
		</div>
  	</div>
	<div class="ui top fixed menu grid mobile only" v-show="isMobile">
		<div class="sixteen wide column">
			<div class="ui grid">
				<div class="ui sixteen wide white menu column" style="margin-top:3vh;"> 
					<a class="ui secondary menu item">
						<router-link :to="{name: 'UsagePolicy'}">Usage Policy</router-link>
					</a>
					<!--<a class="ui secondary menu item">
						Subscriptions
					</a>
					<a class="ui secondary menu item">
						<button class="ui light red button">
							<i class="chart bar outline icon"></i> Calorie counter <sup>coming soon</sup>
						</button>
					</a>-->
					<a 
						class="ui secondary menu item"
						title="Coming soon."
						href="https://www.youtube.com/channel/UCKRpHS0EFxGtgZ9l6UOsjOA/featured"
					>
						<div class="ui red button">
							<i class="youtube icon"></i> 
							<small style="font-weight:300!important;">Watch lastest Videos</small>
						</div>
					</a>
					<a class="ui secondary menu item" href="/#/register">
						<div class="ui button tbb">
							<i class="plus icon"></i>
							Become a Contributor
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="ui top fixed hidden menu mobile only">
		<div class="ui grid container">
			<div class="ui two wide mobile column" id="hamburger-icon" @click="toggleMobileMenu()">
				<i class="large bars icon"></i>
			</div>
			<div class="ui fourteen wide mobile column">
				<img src="/static/transparent_logo.png" class="ui centered image" alt="cookbookinc brand logo" style="margin-top:-6%!important;margin-left:16%!important;">
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	computed: {
		isRegistrationRoute() {
			return (this.$router.currentRoute.name == 'Register')
		}
	},
	data() {
		return {
			isMobile: false
		}
	},
	methods: {
		toggleMobileMenu: function() {
			this.isMobile = !this.isMobile
		},
		comingSoon: function() {
			alert('Coming soon.')
		}
	}
};
</script>

<style>
.tbb {
	background-color: #0160CC!important;
	color: white !important;
	font-weight: 300!important;
}
.item {
	font-weight: 300!important;
	letter-spacing: 0.05em!important;
	font-size: 18px!important;
}
.top.fixed.menu {
	border-bottom:none!important;
	padding-top:50px!important;
}
.rl-fix {
	margin-top: 2.6%!important;
}
body {
	background: transparent!important;
}
#hamburger-icon {
	cursor: pointer;
}
.brand-logo {
	margin-top:-4vh!important; 
	margin-left:25px!important;
}
</style>
