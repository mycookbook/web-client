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
	<div class="ui grid" >
		<div class="ui ten wide computer column sixteen wide mobile column"></div>
			<div class="ui six wide computer column sixteen wide mobile column">
				<Alert :completed="completed" :hasError="hasError" :errors="errors" :success="success" />
			</div>
		</div>
	</div>
</div>
</template>

<script>
import store from '@/store'
import Alert from './Alert.vue'

export default {
	computed: {
		isLoading() {
			return this.$store.state.subscriptionStore.loadingBtn.state
		},
		hasError() {
			return this.$store.state.subscriptionStore.hasError
		},
		errors() {
			return this.$store.state.subscriptionStore.errorMsg
		},
		success() {
			return this.$store.state.subscriptionStore.successMsg
		},
		completed() {
			return this.$store.state.subscriptionStore.completed
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
		Alert
	}
}
</script>

<style>
#loading-btn {
	padding:20px;
	padding-right:40px;
}
</style>
