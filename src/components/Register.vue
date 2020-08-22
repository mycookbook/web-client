<template>
<div class="ui container">
    <Navigation />
    <div class="ui container" style="margin-top:18vh;">
        <div class="ui grid">
            <div class="ui sixteen wide computer column sixteen wide mobile column">
                <div class="ui tiny info message">
                    Already have a contributor account? <a href="">Login</a>
                </div>
                <form class="ui form">
                    <div class="field">
                        <label>Full Name</label>
                        <input type="text" name="full-name" placeholder="Full Name" v-model="fullName">
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="ui tiny message">
                        <label>
                            By hitting the submit button, you have agreed to our <a href="/#/terms-and-conditions">Terms and Conditions, </a>
                        <a href="/#/usage-policy">Usage Policy</a> and 
                        <a href="/#/data-retention-policy">Data Retention Policy</a>
                        </label>
                    </div>
                </form>
                <br />
                <button class="ui tbb button" v-bind:class="{ loading: isLoading }" @click="register()">
                    Submit
                </button>
            </div>
            <div class="ui grid">
                <div class="ui sixteen wide computer column sixteen wide mobile column">
                    <Alert :completed="completed" :hasError="hasError" :errors="errors" :success="success" />
			    </div>
		    </div>
	    </div>
    </div>
    <Contact />
    <Bottom />
</div>
</template>

<script>
import store from '@/store'
import Alert from './Alert.vue'
import Navigation from './Navigation.vue'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
    name: "Register",
    computed: {
		isLoading() {
			return this.$store.state.registerStore.loadingBtn.state
		},
		hasError() {
			return this.$store.state.registerStore.hasError
		},
		errors() {
			return this.$store.state.registerStore.errorMsg
		},
		success() {
			return this.$store.state.registerStore.successMsg
		},
		completed() {
			return this.$store.state.registerStore.completed
		}
	},
    data() {
        return {
            email: '',
            fullName: '',
            password: ''
        }
    },
    components: {
        Navigation,
        Alert,
        Bottom,
        Contact
    },
    methods: {
		register: function() {
            let payload = {
                email: this.email,
                fullName: this.fullName,
                password: this.password
            }

			store.dispatch('register', payload)
		}
	},
};
</script>