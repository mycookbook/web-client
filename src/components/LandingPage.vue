<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: LandingPage.vue
@Last modified by:   florenceokosun
@Last modified time: 01-01-2018
-->

<template>
  <div>
    <div class="ui small modal">
      <i class="close icon"></i>
        <div class="ui massive facebook button" style="margin:15px; width:96%;">
          <i class="facebook icon"></i>
          Sign up with Facebook
        </div>
        <div class="ui sub centered header">Or</div>
        <div class="ui massive google plus button" style="margin:2px 15px 10px; width:96%;">
          <i class="google plus icon"></i>
          Sign up with Email
        </div>
        <div class="actions">
          <div class="description">
            Already have an account? <a href="/login"> Log in</a>
          </div>
        </div>
      </div>
    <Navigation />
    <div class="main ui container">
      <Search />
      <Explore />
      <div class="ui horizontal divider" style="margin-top:15%;">
        top recipes
      </div>
      <Recipes />
      <Bottom />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation2.vue'
import Search from './Search2.vue'
import Explore from './Explore.vue';
import Recipes from './Recipes.vue'
import Bottom from './Bottom.vue'

export default {
  data () {
    return {}
  },
  components: {
    Explore,
    Search,
    Recipes,
    Navigation,
    Bottom,
  }
}
</script>
