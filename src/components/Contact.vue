<template>
  <div class="sign-up-container">
    <footer>
		<div class="ui grid">
			<div class="eight wide column">
				<img class="logo"
				src="/static/signup-img.png"
				alt="enter your email address to be the first to get notified of about new recipes"
				>
			</div>
			<div class="eight wide column">
				<div id="contact-card" class="ui action input" v-bind:class="{ error: isErrored }">
					<input type="text" placeholder="Your email address" v-model="email">
					<button 
						id="loading-btn"
						class="ui button tbb"
						v-bind:class="{ loading: isLoading }"
						@click="getSubscribed()">
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
	</footer>
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
img {
	min-width:unset;
	height:8.5em;
}
.sign-up-container {
  margin-top: 3%;
  width: 100%;
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
#contact-card {
	position:absolute;
	bottom:35%;
	right:0;
}
</style>
