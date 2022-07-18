<template>
<div class="ui container">
    <Navigation />
    <br /><br />
    <div class="ui container" style="margin-top:25vh;">
        <div class="ui center aligned grid">
            <div class="ui sixteen wide computer column sixteen wide mobile column">
                <div class="ui vertical labeled icon buttons">
                    <button class="ui large black button" @click="authRedirect('tiktok')">
                        <img class="ui icon" src="https://www.logo.wine/a/logo/TikTok/TikTok-Icon-Logo.wine.svg" style="margin-left:12px!important;" />
                        Sign in with TikTok
                    </button>
                    <br />
                    <button class="ui large blue disabled button" @click="authRedirect('twitter')">
                        <i class="twitter large icon"></i>
                        Sign in with Twitter
                    </button>
                    <br />
                    <button class="ui large red disabled button" @click="authRedirect('pinterest')">
                        <i class="pinterest large icon"></i>
                        Sign in with Pinterest
                    </button>
                    <br />
                    <button class="ui large tbb disabled button" @click="authRedirect('instagram')">
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
    methods: {
        authRedirect(provider) {
            const csrfState = Math.random().toString(36).substring(2);

            let uri_params = {}

            const oauth_endpoint = {
                'tiktok': process.env.SERVER_ENDPOINT_OAUTH,
                'twitter': process.env.TWITTER_BASE_URL,
                'pinterest': process.env.PINTEREST_BASE_URL,
                'instgaram': process.env.INSTAGRAM_BASE_URL
            }
            
            if (provider === 'tiktok') {
                uri_params = {
                    'client_key': process.env.TIKTOK_CLIENT_KEY,
                    'redirect_uri': process.env.TIKTOK_REDIRECT_URI,
                    'state': csrfState,
                    'response_type': 'code',
                    'scope': ''
                }
            }

            let url = new URL(oauth_endpoint[provider]);

            for (const param in uri_params) {
                url.searchParams.set(param, uri_params[param])
            }

            window.location.href = url;
        }
    },
     components: {
        Navigation,
        Contact,
        Bottom
    }
};
</script>