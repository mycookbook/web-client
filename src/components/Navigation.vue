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
            <Stats></Stats>
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="search recipes" @keyup.enter="search">
                <i class="search link icon"></i>
              </div>
            </div>
            <div class="item">
              <span v-if="isLoggedIn">
                <a class="ui blue circular label">20</a>
                <div class="ui simple dropdown list">
                  <div class="item">
                    <img class="ui mini circular image" src="../assets/chef.png">
                    <div class="content">
                      <div class="ui sub header">{{ displayName }}</div>
                      <i class="circular green trophy icon"></i> verified chef
                    </div>
                  </div>
                  <div class="menu">
                    <div class="item">
                      <router-link to="/cookbook">Create cookbook</router-link>
                    </div>
                    <div class="item">
                      <router-link to="/recipe">Create recipe</router-link>
                    </div>
                    <div class="item">
                      <router-link to="/account">Manage account</router-link>
                    </div>
                    <div class="item">
                      <router-link to="/signout" @click="updateStatus">Sign out</router-link>
                    </div>
                  </div>
                </div>
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
import Stats from '../components/Stats.vue'
export default {
  created () {
    if (store.state.isLogged) {
      this.isLoggedIn = true
    }
    var jwtDecode = require('jwt-decode')
    var decoded = jwtDecode(localStorage.getItem('token'))
    let dev = 'http://api.dev/api/v1/user'

    this.$http.get(dev + '/' + decoded.sub, {
    }).then((response) => {
      console.log(JSON.parse(response.bodyText).response.data.name)
      this.displayName = JSON.parse(response.bodyText).response.data.name
    }, (response) => {
      console.log('error')
    })
  },
  data () {
    return {
      name: 'Cookbook Inc.',
      isLoggedIn: false,
      displayName: ''
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
  },
  components: {
    'Stats': Stats
  }
}
</script>
