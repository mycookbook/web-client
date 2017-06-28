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
              <button class="ui button" @click="signIn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      <!-- end fixed top menu -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Cookbook Inc.'
    }
  },
  methods: {
    signIn: function () {
      location.href = '/#/signin'
    },
    search: function () {
      return alert('searching')
    },
    goHome: function () {
      location.href = '/#/'
    }
  }
}
</script>
