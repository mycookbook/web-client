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
					<a class="item rl-fix"  title="cookbookshq usage policy">
						Usage Policy
					</a>
					</router-link>
					<a class="item" title="Customize what you want to be notified about">
						Subscriptions
					</a>
					<a class="item" title="Contribute by submitting a recipe">
						<button class="ui button tbb">
							+ Add your recipe
						</button>
					</a>
					<a class="item"></a>
				</div>
			</div>
		</div>
  	</div>
	<div class="ui top fixed hidden menu grid mobile only">
		<!-- TODO: implement mobile menu -->
		<div class="sixteen wide">
			<i class="large bars icon"></i>
		</div>
	</div>
</div>
</template>

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
</style>
