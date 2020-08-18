<template>
<div class="sign-up-container">
	<div class="ui grid">
		<div class="ten wide computer column sixteen wide mobile column">
			<img class="ui large image logo" src="/static/signup-img.png" alt="enter your email address to be the first to get notified of about new recipes">
		</div>
		<div class="six wide computer column sixteen wide mobile column">
			<div class="ui action input grid" id="contact-card" v-bind:class="{ error: isErrored }">
				<input class="eight wide column" type="text" placeholder="Your email address" v-model="email">
				<button id="loading-btn" class="ui button tbb eight wide column" v-bind:class="{ loading: isLoading }" @click="getSubscribed()">
					Get started now
				</button>
			</div>
		</div>
	</div>
	<div class="ui grid">
		<div class="eleven wide column"></div>
		<div class="five wide column">
			<div class="ui success message hidden" id="subscription-state">
				<div class="header" id="status-header">
					Thank you for subscribing!
				</div>
				<p id="status-msg">
					You will now recieve weekly updates in your email.
				</p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import store from '@/store'

export default {
	data () {
		return {
			email: '',
			isErrored: false,
			isLoading: false
		}
	},
	methods: {
		getSubscribed: function() {
			if (!this.email) {
				this.toggleErrorState(true)
				this.toggleLoadingState(false)

				// store.dispatch('has_error') TODO: use the store to toggle class and style bindings states
			} else {
				this.toggleErrorState(false)
				this.toggleLoadingState(true)
				
				store.dispatch('subscribeUser', this.email) //TODO: refactor this to work with appropriate store dispatcher/event
			 }
			},
			toggleErrorState: function(status) {
				this.isErrored = status
			},
			toggleLoadingState: function(status) {
				this.isLoading = status
			}
		}
	}
</script>

<style>

.sign-up-container {
	/* width: 97%; */
	margin-top: 5%!important;
	padding-top: 50px;
	border-top: 1px solid #eee;
}
#subscription-state {
	position:relative;
	bottom:55%;
	right:-14px;
}
#loading-btn {
	padding:20px;
	padding-right:40px;
}
</style>
