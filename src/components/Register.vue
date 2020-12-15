<template>
<div class="ui container">
    <Navigation />
    <div class="ui container" style="margin-top:18vh;">
        <div class="ui grid">
            <div class="ui sixteen wide computer column sixteen wide mobile column">
                <div class="ui large info message">
                    Already have a contributor account? 
                    <a href="https://contribute.cookbookshq.com/login" target="_blank">Login</a>
                </div>
                <form class="ui form">
                    <div class="field">
                        <label>Full Name</label>
                        <input type="text" name="full-name" placeholder="Full Name" v-model="fullName">
                        <div class="ui negative message" v-if="errors.fullName">
                            {{ errors.fullName[0] }}
                        </div>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" v-model="email">
                        <div class="ui negative message" v-if="errors.email">
                            {{ errors.email[0] }}
                        </div>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" v-model="password">
                        <div class="ui negative message" v-if="errors.password">
                            {{ errors.password[0] }}
                        </div>
                    </div>
                    <div class="ui tiny message">
                        <label>
                            By hitting the submit button, you have agreed to our <a href="/#/terms-and-conditions">Terms &amp; Conditions, </a>
                        <a href="/#/usage-policy">Usage</a> and 
                        <a href="/#/data-retention-policy">Data Retention Policies</a>
                        </label>
                    </div>
                </form>
                <div class="ui message success" v-if="success">
                    <h3>
                        Congratulations, you have successfully created an account. 
                        A confirmation email is coming to your inbox soon. 
                        Make sure you click the link to confirm your email 
                        so you can start creating those very special recipes.
                    </h3>
                </div>
                <br />
                <button class="ui tbb button" v-bind:class="{ loading: isLoading }" @click="register()">
                    Submit
                </button>
            </div>
	    </div>
    </div>
    <div>
        <div class="ui container" style="margin-top:6vh; border-top:1px solid #cccccc">
            <div class="ui grid">
                <div class="ui ten wide computer column sixteen wide mobile column">
                    <img class="ui large left floated image" src="/static/signup-img.png" 
                    alt="property of cookbookshq.com">
                </div>
                <div class="ui six wide computer column sixteen wide mobile column" style="margin:auto;">
                    <div class="ui secondary menu flex-container">
                        <a class="item" title="Get fresh updates about new submissions, events and more by following our facebook page. Property of cookbookshq.com">
                            <i class="facebook f icon"></i>
                        </a>
                        <a class="item" title="Get latest updates from our global recipes base in real time by following our Twitter handle. Property of cookbookshq.com">
                            <i class="twitter t icon"></i>
                        </a>
                        <a class="item" title="Get latest updates from our global recipes base in real time by following our Instagram handle. Property of cookbookshq.com">
                            <i class="instagram icon"></i>
                        </a>
                    </div>
		        </div>
	        </div>
        </div>
    </div>
</div>
</template>

<script>
import store from '@/store'
import Alert from './Alert.vue'
import Navigation from './Navigation.vue'

export default {
    name: "Register",
    mounted() {
        this.$store.dispatch('reset_registration_form')
    },
    computed: {
		isLoading() {
            return this.$store.state.resource_isLoading
		},
		errors() {
			return this.$store.state.form_errors.registration_form
		},
        success() {
            return this.$store.state.registerStore.success
        }
	},
    data() {
        return {
            email: '',
            fullName: '',
            password: ''
        }
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
     components: {
        Navigation
    },
};
</script>