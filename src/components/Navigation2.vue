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
          <a class="item" title="Unlock more features and capabilities">
            Become Premium
          </a>
          <a class="item" title="Find out how to use this website">
            Usage Policy
          </a>
          <a class="item" title="Customize what you want to be notified about">
            Subscribe
          </a>
          <a class="item" title="Become a contributor">
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
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
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
