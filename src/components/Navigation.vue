<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: Navigation.vue
@Last modified by:   florenceokosun
@Last modified time: 28-02-2018
-->

<template>
<div>
	<div class="ui top fixed menu grid mobile hidden">
		<div class="eight wide mobile four wide tablet six wide computer left floated column tvn no padding">
			<div class="tvn clipped brand">
				<a href="/" class="ui medium image" title="cookbookshq brand logo">
					<img class="logo" src="/static/logo_white.png" alt="cookbookinc brand logo" style="min-width: unset;height: 5.5em; !important">
				</a>
			</div>
    	</div>
		<div class="eight wide mobile twelve wide tablet ten wide computer right floated column tvn no padding">
			<div class="selectors">
				<div class="ui right floated secondary menu">
					<router-link :to="{
						name: 'UsagePolicy'
					}">
					<a class="item rl-fix"  title="Cookbooks HQ Usage Policy. Property of cookbookshq.com">
						Usage Policy
					</a>
					</router-link>
					<a class="item" title="Customize what you want to be notified about. Property of cookbookshq.com" @click="showSubscriptionsChannels">
						Subscriptions
					</a>
					<a 
					class="item" 
					title="Become a contributor by filling the sign up form and start submitting recipes. You can create your custom cookbooks or contribute to existing cookbooks. This is your personal space to be your creative you! Property of cookbookshq.com">
						<button class="ui light red button">
							<i class="chart bar outline icon"></i> Calorie counter <sup>coming soon</sup>
						</button>
					</a>
					<a 
					class="item" 
					title="Become a contributor by filling the sign up form and start submitting recipes. You can create your custom cookbooks or contribute to existing cookbooks. This is your personal space to be your creative you! Property of cookbookshq.com">
						<button class="ui button tbb" @click="register">
							+ Register
						</button>
					</a>
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
					<a class="ui secondary menu item">Subscriptions</a>
					<a class="ui secondary menu item">
						<button class="ui light red button">
							<i class="chart bar outline icon"></i> Calorie counter <sup>coming soon</sup>
						</button>
					</a>
					<a class="ui secondary menu item">
						<button class="ui button tbb" @click="register">
							+ Register
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="ui top fixed hidden menu mobile only">
		<div class="ui grid container">
			<div class="ui two wide column" id="hamburger-icon" @click="toggleMobileMenu()">
			<i class="large bars icon"></i>
		</div>
		<div class="ui fourteen wide column brand">
			<a href="/" class="ui medium image" title="cookbookshq brand logo">
				<img class="logo" src="/static/logo_white.png" alt="cookbookinc brand logo" style="margin-top:-2vh;margin-left:9%;">
			</a>
		</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			isMobile: false
		}
	},
	methods: {
		toggleMobileMenu: function() {
			this.isMobile = !this.isMobile
		},
		register: function() {
			alert('register to become a contributor')
		},
		showSubscriptionsChannels: function() {
			alert('subscribe to notifications')
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
</style>
