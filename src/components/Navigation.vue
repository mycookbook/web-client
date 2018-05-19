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
  
      <div class="tvn fade clipped brand">
        <img class="logo" src="/static/logo.png">
        <!-- <h1 class="name
                     ui large header
                     ">Cookbook inc.</h1> -->
      </div>
    </div>

    <div class="eight wide mobile
                  twelve wide tablet
                  ten wide computer
                  right floated column
                  tvn no padding">
      <!-- selectors -->
      <div class="selectors">



        <!-- vendor selector -->
        <div class="fitted item selector
                      ui simple dropdown">
          <!-- tab -->
          <div class="tab
                        tvn themed
                        positioning
                        ">
            <div class="icon section">
              <div class="icon header">
                <svg class="tvn icon"><use xlink:href="#icon-vendor"></use></svg>
              </div>
              <div class="ui mobile only sub header">MPC</div>
            </div>

            <div class="mobile hidden info section
                          tvn fade clipped">
              <h3 class="ui medium header">Mama Peace Catering Services</h3>
              <div class="ui sub header
                            tvn regular weight">Vendor</div>
            </div>

            <div class="dropdown toggle
                          tablet or lower hidden
                          tvn right middle positioned
                          ">
              <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
            </div>
          </div> <!-- end tab -->

          <!-- dropdown menu -->
          <div class="ui dropdown menu">
            <div class="content list">
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Mama Peace Catering Services</h3>
                <div class="description">Cafeteria Management</div>
              </div>
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Wade Confectioneries</h3>
                <div class="description">Pastries Vendor</div>
              </div>
            </div>
          </div> <!-- end dropdown menu -->
        </div><!-- end vendor selector -->

      </div> <!-- selectors -->
    </div>

  </div> <!-- end fixed top menu -->
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
