<template>
	<div class="contact_form_container">
		<div class="ui grid">
			<div class="ui ten wide computer column sixteen wide mobile column">
				<img class="ui large left floated image" src="/static/signup-img.png"
					alt="enter your email address to be the first to get notified of about new recipes">
			</div>
			<div class="ui six wide computer column sixteen wide mobile column margin_auto mobile hidden">
				<div class="ui input fullWidth">
					<input type="text" placeholder="Your email address" v-model="email">
					<button class="ui tbb button" v-bind:class="{ loading: isLoading }" @click="getSubscribed()">
						Be the first to know
					</button>
				</div>
			</div>
			<div class="sixteen wide mobile column mobile only">
				<div class="ui input fullWidth">
					<input type="text" placeholder="Your email address" v-model="email">
				</div>
			</div>
			<div class="sixteen wide mobile column mobile only">
				<div class="ui input">
					<button class="ui tbb button" v-bind:class="{ loading: isLoading }" @click="getSubscribed()">
						Be the first to know
					</button>
				</div>
			</div>
		</div>
		<div class="ui grid">
			<div class="ui ten wide computer column sixteen wide mobile column"></div>
			<div class="ui six wide computer column sixteen wide mobile column form_errors">
				<div class="ui negative message" v-if="errors.email">
					{{ errors.email[0] }}
				</div>
				<div class="ui message success" v-if="success">
					Congratulations, you have successfully subscribed.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store'
import Alert from './Alert.vue'

export default {
	mounted() {
		this.$store.dispatch('reset_contact_form')
	},
	computed: {
		isLoading() {
			return this.$store.state.resource_isLoading
		},
		errors() {
			return this.$store.state.form_errors.contact_form
		},
		success() {
			return this.$store.state.subscriptionStore.success
		}
	},
	data() {
		return { email: '' }
	},
	methods: {
		getSubscribed: function () {
			store.dispatch('subscribeUser', this.email)
		}
	}
}
</script>

<style scoped>
.contact_form_container {
	width: 100%;
	border-top: 1px solid #cccccc;
	margin-top: 5%;
}

.form_errors {
	margin-top: -4% !important;
}

.margin_auto {
	margin: auto;
}

.fullWidth {
	width: 100% !important;
}
</style>