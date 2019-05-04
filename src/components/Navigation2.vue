<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: Navigation.vue
@Last modified by:   florenceokosun
@Last modified time: 28-02-2018
-->

<template>
  <!-- fixed menu -->
  <div class="ui top fixed menu grid">
    <div class="eight wide mobile
                  four wide tablet
                  six wide computer
                  left floated column
                  tvn no padding">
      <div class="tvn clipped brand">
        <img
        class="logo"
        src="/static/logo_white.png"
        alt="cookbookinc brand logo"
        style="min-width: unset;height: 5.5em; !important"
        >
      </div>
    </div>
    <div class="eight wide mobile
                  twelve wide tablet
                  ten wide computer
                  right floated column
                  tvn no padding">
      <div class="selectors">
        <div class="ui right floated secondary menu">
          <a class="item">
            Featured Recipes
          </a>
          <a class="item">
            Blog
          </a>
          <a class="item">
            About
          </a>
          <a class="item">
            <button class="ui button tbb">
              + Submit
            </button>
          </a>
          <a class="item"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  created () {
    if (store.state.isLogged) {
      this.isLoggedIn = true
      this.displayName = this.getDisplayName()
    }
  },
  data () {
    return {
      isLoggedIn: false,
      displayName: '',
      submenu: store.state.isLogged
    }
  },
  methods: {
    updateStatus: function () {
      this.isLoggedIn = true
    },
    getDisplayName: function () {
      let displayname = localStorage.getItem('displayName')
      return displayname[0].toUpperCase() + displayname.slice(1)
    },
    login: function () {
      let url = process.env.BASE_URL + '/auth/signup'
      this.$http.post(url, {
        name: 'Florence Okosun',
        email: 'okosunuzflorence@gmail.com',
        password: 'str()nger1'
      }).then((response) => {
        console.log('successful login', response)
      }, (error) => {
        console.log('error loggin in', error.bodyText)
      })
    }
  },
  mounted: function () {
    $('.navbar-mobile.ui.dropdown').dropdown()
    $('.navbar.overlay').visibility({type: 'fixed', offset: 0 // give some space from top of screen
    })
  }
}
</script>

<style>
.nav-banner {
  margin-bottom: 14%;
}
.tbb {
  background-color: #0160CC!important;
  color: white !important;
  font-weight: 300!important;
}
.item {
  font-weight: 300!important;
  letter-spacing: 0.05em!important;
  font-size: 18px!important;
}
.top.fixed.menu {
  border-bottom:none!important;
  padding-top:50px!important;
}
body {
  background: transparent!important;
}
</style>
