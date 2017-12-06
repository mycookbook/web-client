<template>
  <div>
    <!-- <span class="subtitle">
      RECIPES
    </span> -->
    <span class="see">
      <a href="/#/">
        see all <i class="chevron right icon"></i>
      </a>
    </span>
    <br><br>

    <div class="ui medium images">
      <div class="ui fluid image" v-for="recipe in recipes">
        <Recipe
          :imgUrl="recipe.imgUrl"
          :name="recipe.name"
          :flag="recipe.flag"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Recipe from './Recipe.vue'

export default {
  data () {
    return {
      recipes: [{
        imgUrl: 'static/ofada-rice.jpg',
        name: 'Ofada Rice'
      }, {
        imgUrl: 'static/ghana-jollof-rice.png',
        name: 'Ghanian Jollof Rice'
      }, {
        imgUrl: 'static/akara-and-pap.jpg',
        name: 'Akara and pap (ogi)'
      }, {
        imgUrl: 'static/puff-puff.jpg',
        name: 'Puff puff'
      }]
    }
  },
  components: {
    Recipe: Recipe
  }
}
</script>

<style scoped>
.subtitle {
  font-size: 25px;
  font-weight: 900;
}
.see {
  float: right;
}
.images-wrapper {
  display: flex!important;
  flex-direction: row!important;
}
</style>
