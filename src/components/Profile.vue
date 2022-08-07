<template>
	<div>
		{{_activeUser.active }}
		<img class="ui circular small image" :src="_activeUser.avatar" />
		<br />
		<form class="ui form">
			<h4 class="ui dividing header">
				Personal Info
			</h4>
			<div class="field">
				<label>Name</label>
				<div class="twelve wide field">
					<input type="text" name="fname" :placeholder="_activeUser.name" disabled>
				</div>
			</div>
			<div class="field">
				<label>Email</label>
				<div class="twelve wide field">
					<input type="text" name="email" placeholder="This email will be used for correspondence"
						v-model="email">
				</div>
			</div>
			<div class="field">
				<label>Pronouns (optional)</label>
				<div class="fields">
					<div class="twelve wide field">
						<input type="text" name="pronouns" :placeholder="_activeUser.pronouns" v-model="pronouns">
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
			<div class="field">
				<label>Bio (Optional)</label>
				<textarea rows="2" v-model="about"></textarea>
			</div>
			<div class="ui tbb button" v-bind:class="{ loading: isLoading }" @click="updateProfile()">Update</div>
		</form>
	</div>
</template>

<script>

export default {
	name: "Profile",
	props: {
		_activeUser: Object
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
			phone: this._activeUser.contact_detail.phone,
			pronouns: this._activeUser.pronouns,
			email: this._activeUser.contact_detail.contact_email,
			about: this._activeUser.about
		}
	},
	methods: {
		updateProfile() {
			let payload = {
				name_slug: this._activeUser.name_slug,
				token: this.$store.state.access_token
			}

			if (this.email !== "") {
				payload.contact_email = this.email
			}

			if (this.phone !== "") {
				payload.phone = this.phone
			}

			if (this.pronouns !== "") {
				payload.pronouns = this.pronouns
			}

			if (this.pronouns !== "") {
				payload.pronouns = this.pronouns
			}

			if (this.about !== "") {
				payload.about = this.about
			}

			this.$store.dispatch('update_user', payload)
		}
	}
};
</script>