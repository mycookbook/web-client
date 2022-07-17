<template>
<div class="ui container">
    <Navigation />
    <br /><br />
    <div class="ui container" style="margin-top:25vh;">
        <div class="ui center aligned grid">
            <div class="ui sixteen wide computer column sixteen wide mobile column">
                <div class="ui vertical labeled icon buttons">
                    <button class="ui large black button">
                        <img class="ui icon" src="https://www.logo.wine/a/logo/TikTok/TikTok-Icon-Logo.wine.svg" style="margin-left:12px!important;" />
                        Sign in with TikTok
                    </button>
                    <br />
                    <button class="ui large blue button">
                        <i class="twitter large icon"></i>
                        Sign in with Twitter
                    </button>
                    <br />
                    <button class="ui large red button">
                        <i class="pinterest large icon"></i>
                        Sign in with Pinterest
                    </button>
                    <br />
                    <button class="ui large tbb button">
                        <i class="instagram large icon"></i>
                        Sign in with Instagram
                    </button>
                </div>
                <br /><br /><br />
                <div>
                    <p style="margin-bottom:-4px!important;">By signing in, you have agreed to our</p> 
                    <span>
                        <a href="/terms-and-conditions">Terms &amp; Conditions, </a>
                        <a href="/usage-policy">Usage</a> and 
                        <a href="/data-retention-policy">Data Retention Policies</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <br /><br /><br /><br />
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
            password: '',
            original_content: '',
            intro: ''
        }
    },
    methods: {},
     components: {
        Navigation,
        Contact,
        Bottom
    }
};
</script>