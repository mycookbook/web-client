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
    <div class="right menu" v-if="!isLoggedIn">
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
        }" class="item">
          Sign Up
      </router-link>
      <router-link :to="{
          name: 'Login'
        }" class="item">
          Log In
      </router-link>
    </div>
    <div class="right menu" v-else>
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
      <router-link to="/signout" @click="updateStatus" class="item">
        Logout
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
    }
  },
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    updateStatus: function () {
      this.isLoggedIn = true
    }
  }
}
</script>

<style>
.nav-banner {
  margin-bottom: 14%;
}
</style>
