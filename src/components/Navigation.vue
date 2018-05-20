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
        <img class="logo" src="/static/logo.png" />
        <div class="ui secondary  menu">
          <a class="item">
            About
          </a>
          <a class="item">
            Help
          </a>
          <a class="item">
            Go Pro
          </a>
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Quick Search...">
                <i class="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="eight wide mobile
                  twelve wide tablet
                  ten wide computer
                  right floated column
                  tvn no padding">
      <div class="selectors">
        <div class="fitted item selector ui simple dropdown">
          <div class="tab tvn themed positioning">
            <div class="icon section">
              <div class="icon header mobile hidden">
                <svg class="tvn icon" viewBox="0 0 512 512" @click="login()">
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
                </svg>
              </div>
              <div class="ui mobile only sub header">
                <i class="align justify icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import facebookLogin from 'facebook-login-vuejs';

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
      console.log(process.env.DEV_URL)
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
</style>
