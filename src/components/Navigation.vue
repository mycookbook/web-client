<template>
  <div class="tvn page">
    <!-- fixed menu -->
    <div class="ui top fixed menu grid">
      <div class="eight wide mobile four wide tablet six wide computer left floated column tvn no padding">
          <!-- brand -->
          <div class="tvn fade clipped brand">
            <img class="logo" src="../assets/logo.png" @click="goHome">
            <h1 class="name ui large header">{{ name }}</h1>
          </div>
          <!-- end brand -->
        </div>
        <div class="ui secondary menu">
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="search cookbooks..." @keyup.enter="search">
                <i class="search link icon"></i>
              </div>
            </div>
            <div class="item">
              <span v-if="isLoggedIn">
                <button class="ui button">
                  <router-link to="/signout" @click="updateStatus">Sign out</router-link>
                </button>
              </span>
              <span v-else>
                <button class="ui button">
                  <router-link to="/signin">Sign in</router-link>
                </button>
              </span>
            </div>
          </div>
        </div>
      <!-- end fixed top menu -->
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
      name: 'Cookbook Inc.',
      isLoggedIn: false
    }
  },
  methods: {
    search: function () {
      return alert('searching')
    },
    goHome: function () {
      location.href = '/#/'
    },
    updateStatus: function () {
      this.isLoggedIn = true
    }
  }
}
</script>
