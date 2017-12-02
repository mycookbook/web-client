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
    <div class="ui container images-wrapper">
      <div v-for="recipe in recipes">
        <!-- <div class="ui images"> -->
          <Recipe
            :imgUrl="recipe.imgUrl"
            :name="recipe.name"
            :flag="recipe.flag"
          />
        <!-- </div> -->
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
        imgUrl: 'static/naija-indomie.jpg',
        name: 'Nigerian Indomie meal'
      }, {
        imgUrl: 'static/ghana-jollof-rice.jpg',
        name: 'Ghanian Jollof Rice'
      }, {
        imgUrl: 'static/akara-and-pap.jpeg',
        name: 'Akara and pap (ogi)'
      }, {
        imgUrl: 'static/puff-puff.jpeg',
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
