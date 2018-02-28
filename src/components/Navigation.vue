<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: Navigation.vue
@Last modified by:   florenceokosun
@Last modified time: 12-02-2018
-->

<template>
  <div class="nav-banner">
  <div class="ui top fixed menu grid">
    <div class="item borderless" style="margin-left: 250px; height:75px;">
      <router-link :to="{
          name: 'Home'
        }" class="item">
          <img src="/static/logo.png" />
      </router-link>
    </div>
    <div class="right menu">
      <div class="item" v-if="isLoggedIn">
          <b>{{ displayName }}</b>
      </div>
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
          name: 'Dashboard'
        }" class="item">
          Dashboard
      </router-link>
      <router-link to="/signout" @click="updateStatus" class="item" v-if="isLoggedIn">
        Logout
      </router-link>
      <router-link :to="{
          name: 'Login'
        }" class="item" v-else>
          Log In
      </router-link>
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
      displayName: ''
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
  }
}
</script>

<style>
.nav-banner {
  margin-bottom: 14%;
}
</style>
