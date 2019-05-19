<template>
  <div>
      <Navigation />
      <div class="ui container" style="margin-top:7%!important;">
        <div class="title segments">
          {{ recipe.name }}
        </div>
      </div>
      <img class="ui tiny image" :src="recipe.imgUrl">
      <div>
        {{ recipe.ingredients }}
      </div>
      <div>
        calorie count: {{ recipe.calorie_count }}
      </div>
      <div>
        created: 2 days ago
      </div>
      <div>
        description: {{ recipe.description }}
      </div>
      <div>
        nutritional details: {{ recipe.nutritional_detail }}
      </div>
      <div>
        summary: {{ recipe.summary }}
      </div>
      <div>
        created by: stanley
      </div>
  </div>
</template>

<script>
import Navigation from './Navigation2'

export default {
  mounted() {
    this.recipe = this.$store.getters['get_recipe'](
      this.$route.params.cookbookId,
      this.$route.params.recipeId
    )
  },

  data () {
    return {
      recipe: {
        id: '',
        coverImg: '',
        description: ''
      }
    }
  },
  components: {
    Navigation
  }
}
</script>

<style>
.title {
  font-weight: 900;
  margin-top: 0px;
  margin-left: -1px;
}
</style>
