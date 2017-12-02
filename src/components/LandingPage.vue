<template>
  <div class="site-content">
    <Navm />
    <br><br><br>
    <br><br><br>
    <br><br><br>

    <Search />
    <br><br><br>
    <br><br><br>

    <CookbookList />
    <br><br><br>
    <div class="ui horizontal divider">
      top recipes
    </div>
    <RecipeList />
    <br><br><br>

    <Bottom />
  </div>
</template>

<script>
import Navm from './Navm.vue'
import Search from './Search.vue'
import CookbookList from './CookbookList.vue'
import RecipeList from './RecipeList.vue'
import Bottom from './Bottom.vue'

export default {
  data () {
    return {}
  },
  components: {
    Navm: Navm,
    Search: Search,
    CookbookList: CookbookList,
    RecipeList: RecipeList,
    Bottom: Bottom
  }
}
</script>
