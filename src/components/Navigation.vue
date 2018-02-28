<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: Navigation.vue
@Last modified by:   florenceokosun
@Last modified time: 28-02-2018
-->

<template>
  <div class="navbar overlay">
    <div class="ui menu">
      <router-link :to="{
          name: 'Home'
        }" class="header item">
          <img src="/static/logo.png" />
      </router-link

      <div class="right menu">
        <!-- start: mobile layout -->
        <div class="navbar-mobile ui dropdown icon item">
          <div class="text">More</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <router-link :to="{
                name: 'Discover'
              }" class="item">
                Discover
            </router-link>
            <router-link :to="{
                name: 'Help'
              }" class="item">
                Help
            </router-link>
            <router-link :to="{
                name: 'Register'
              }" class="item" v-if="!isLoggedIn">
                Sign Up
            </router-link>
              <router-link :to="{
                name: 'Dashboard'
              }" class="item" v-if="isLoggedIn">
                Dashboard
            </router-link>
            <router-link to="/signout" @click="updateStatus" class="item" v-if="isLoggedIn">
              Logout
            </router-link>
          </div>
        </div>
        <!-- end: mobile layout -->

        <!-- start: desktop layout -->
        <div class="navbar-desktop ui item">
          <router-link :to="{
              name: 'Discover'
            }" class="item">
              Discover
          </router-link>
          <router-link :to="{
              name: 'Help'
            }" class="item">
              Help
          </router-link>
          <router-link :to="{
              name: 'Register'
            }" class="item" v-if="!isLoggedIn">
              Sign Up
          </router-link>
          <router-link :to="{
              name: 'Dashboard'
            }" class="item" v-if="isLoggedIn">
              Dashboard
          </router-link>
          <router-link to="/signout" @click="updateStatus" class="item" v-if="isLoggedIn">
            Logout
          </router-link>
        </div>
        <!-- end: desktop layout -->

        <router-link :to="{
            name: 'Login'
          }" class="item" v-if="!isLoggedIn">
            Log In
        </router-link>
        <div class="item" v-if="isLoggedIn">
            {{ displayName }}
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
