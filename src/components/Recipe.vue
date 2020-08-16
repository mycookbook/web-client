<template>
  <div>
      <Navigation />
      <div class="ui container" style="margin-top:7%!important;">
        <h2 class="cookbook-title">
          {{ recipe.name }}
        </h2>
      <img
        class="ui fluid image"
        :src="recipe.imgUrl"
      >
      <div class="ui five statistics info message">
        <div class="statistic">
          <div class="value">
            1/5
          </div>
          <div class="label">
            difficulty
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            15
          </div>
          <div class="label">
            prep time (mins)
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            8
          </div>
          <div class="label">
            cook time (mins)
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            {{ recipe.calorie_count }}
          </div>
          <div class="label">
            calorie count
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            2-4
          </div>
          <div class="label">
            serves
          </div>
        </div>
      </div>
      <div class="ui container" style="margin-top:4%!important;">
        <div>
          created: 2 days ago
        </div>
        <div>
          <span class="item">
            ---- Ingredients ----
          </span>
          <div>
            {{ recipe.ingredients }}
          </div>
        </div>
        <div>
          <span class="item">
            ---- Preparation ----
          </span>
          <div>
            {{ recipe.description }}
          </div>
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
        <Contact />
        <Bottom />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

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
    Navigation,
    Contact,
    Bottom
  }
}
</script>

<style scoped>
.title {
  font-weight: 900;
  margin-top: 0px;
  margin-left: -1px;
}
</style>
