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
    <Navigation />
    <div class="main ui container">
      <Search />
      <Taverna />
      <CookbookList />
      <div class="ui horizontal divider">
        top recipes
      </div>
      <RecipeList />
    </div>
    <!-- <Bottom /> -->
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Search from './Search.vue'
import Taverna from './Taverna.vue';
import CookbookList from './CookbookList.vue'
import RecipeList from './RecipeList.vue'
import Bottom from './Bottom.vue'

export default {
  data () {
    return {}
  },
  components: {
    Taverna: Taverna,
    Search: Search,
    RecipeList: RecipeList,
    Navigation: Navigation,
    CookbookList: CookbookList
  }
}
</script>
