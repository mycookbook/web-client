<template>
  <div class="ui container">
    <Navigation />
    <br /><br />
    <div class="ui container" style="margin-top:25vh;">
      <div class="ui center aligned grid">
        <div class="ui sixteen wide computer column sixteen wide mobile column">
          <div class="ui vertical labeled icon buttons">
            <button class="ui large black button" @click="authRedirect('tiktok')">
              <img class="ui icon" src="https://www.logo.wine/a/logo/TikTok/TikTok-Icon-Logo.wine.svg"
                style="margin-left:12px!important;" />
              Sign in with TikTok
            </button>
            <br />
            <button class="ui large button" @click="authRedirect('magicLink')">
              <i class="magic large icon"></i>
              Sign in with Magic Link
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
  methods: {
    authRedirect(provider) {
      if (provider === 'magicLink') {
        alert('This feature is limited to ONLY authorized users. Please login with TikTok instead.')
      } else if (process.env.NODE_ENV === 'development') {
        window.location.href = process.env.APP_URL + '/#/' + provider + '/?code=&_d='
      } else {
        let uri_params = {}

        const csrfState = Math.random().toString(36).substring(2);

        const oauth_endpoint = {
          'tiktok': process.env.SERVER_ENDPOINT_OAUTH
        }

        let url = new URL(oauth_endpoint[provider]);

        uri_params = {
          'client_key': process.env.TIKTOK_CLIENT_KEY,
          'redirect_uri': 'https://api.cookbookshq.com/callback/tiktok',
          'response_type': 'code',
          'scope': 'user.info.basic,video.list',
          'state': csrfState
        }

        for (const param in uri_params) {
          url.searchParams.set(param, uri_params[param])
        }

        window.location.href = url;
      }
    }
  },
  components: {
    Navigation,
    Contact,
    Bottom
  }
};
</script>
