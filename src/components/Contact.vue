<template>
  <div class="sign-up-container">
    <footer>
		<div class="ui grid">
			<div class="eight wide column">
				<img class="logo"
				src="/static/signup-img.png"
				alt="enter your email address to be the first to get notified of about new recipes"
				style="min-width:unset;height:8.5em; !important">
			</div>
			<div class="eight wide column" style="position:relative!important;">
				<div id="contact-card" class="ui action input" style="position:absolute;bottom:35%;right:0;">
					<input type="text" placeholder="Your email address" v-model="email">
					<button 
						id="loading-btn"
						class="ui button tbb" 
						style="padding:20px;padding-right:40px;" 
						@click="getSubscribed()">
							Get started now
					</button>
				</div>
			</div>
		</div>
		<div class="ui grid">
			<div class="eleven wide column"></div>
			<div class="five wide column">
				<div class="ui success message hidden" id="subscription-succeeded" style="position:relative;bottom:55%;right:-14px;">
					<div class="header">
						Thank you for subscribing!
					</div>
					<p>You will now recieve weekly updates in your email.</p>
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
		error: false
	}
  },
  methods: {
	  getSubscribed: function() {
		  if(!this.email) {
			  this.error = true
			  $("#contact-card").addClass("error");
		  } else {
			  $("#loading-btn").addClass("loading")
			  store.dispatch('subscribeUser', this.email)
		  }
	  }
  }
}
</script>
<style>
.sign-up-container {
  /* border-top: 1px solid #cccccc!important; */
  margin-top: 3%;
  width: 100%;
}
</style>
