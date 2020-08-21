<template>
<div class="ui container" style="margin-top:6vh; border-top:1px solid #cccccc">
	<div class="ui grid">
		<div class="ui ten wide computer column sixteen wide mobile column">
			<img class="ui large left floated image" src="/static/signup-img.png" 
			alt="enter your email address to be the first to get notified of about new recipes">
		</div>
		<div class="ui six wide computer column sixteen wide mobile column" style="margin:auto;">
			<div class="ui action centered input">
				<input type="text" placeholder="Your email address" v-model="email">
				<button class="ui tbb button" id="loading-btn" v-bind:class="{ loading: isLoading }" @click="getSubscribed()">
					Get started now
				</button>
			</div>
		</div>
	</div>
	<ErrorMessage :errorMessage="errorMessage" :hasError="hasError" :isError="hasError"  />
</div>
</template>

<script>
import store from '@/store'
import ErrorMessage from './alerts/ErrorMessage.vue'

export default {
	computed: {
		isLoading() {
			return this.$store.state.subscriptionStore.loadingBtn.state
		},
		hasError() {
			return this.$store.state.subscriptionStore.hasError
		},
		errorMessage() {
			return this.$store.state.subscriptionStore.errorMsg
		}
	},
	data () {
		return {
			email: ''
		}
	},
	methods: {
		getSubscribed: function() {
			store.dispatch('subscribeUser', this.email)
		}
	},
	components: {
		ErrorMessage
	}
}
</script>

<style>
#loading-btn {
	padding:20px;
	padding-right:40px;
}
.absolute-center {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
</style>
