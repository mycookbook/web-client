<template>
	<div>
		<img class="ui circular image" :src="_myProfile.avatar" />
		<br />
		<form class="ui form">
			<h4 class="ui dividing header">
				Personal Info
			</h4>
			<div class="field">
				<label>Name</label>
				<div class="twelve wide field">
					<input type="text" name="fname" :placeholder="_myProfile.name" disabled>
				</div>
			</div>
			<div class="field">
				<label>Email</label>
				<div class="twelve wide field">
					<input type="text" name="email" placeholder="This email will be used for correspondence" v-model="email" >
				</div>
			</div>
			<div class="field">
				<label>Pronouns (optional)</label>
				<div class="fields">
					<div class="twelve wide field">
						<input type="text" name="pronouns" :placeholder="_myProfile.pronouns" v-model="pronouns">
					</div>
				</div>
			</div>
			<div class="field">
				<label>Phone (Optional)</label>
				<div class="fields">
					<div class="twelve wide field">
						<input type="text" name="phone" placeholder="Your phone number" v-model="phone">
					</div>
				</div>
			</div>
			<div class="ui tbb button" v-bind:class="{ loading: isLoading }" @click="updateProfile()">Update</div>
		</form>
	</div>
</template>

<script>

export default {
	name: "Profile",
	props: {
		_myProfile: Object
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
		return {
			phone: "",
			pronouns: "",
			email: ""
		}
	},
	methods: {
		updateProfile() {
			
			const payload = {
				username: this._myProfile.name_slug,
				email: this.email,
				phone: this.phone,
				pronouns: this.pronouns,
				token: this.$store.state.access_token
			}

			this.$store.dispatch('update_user', payload)
		}
	}
};
</script>