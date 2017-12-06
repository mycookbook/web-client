<template>
  <div>
    <Navigation />
    <Search />
    <CookbookList />
    <div class="ui horizontal divider">
      top recipes
    </div>
    <RecipeList />
    <!-- <Bottom /> -->
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Search from './Search.vue'
import CookbookList from './CookbookList.vue'
import RecipeList from './RecipeList.vue'
import Bottom from './Bottom.vue'

export default {
  data () {
    return {}
  },
  components: {
    Search: Search,
    Bottom: Bottom,
    RecipeList: RecipeList,
    Navigation: Navigation,
    CookbookList: CookbookList
  }
}
</script>
