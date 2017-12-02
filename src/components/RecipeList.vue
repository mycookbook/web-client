<template>
  <div>
    <span class="subtitle">
      RECIPES
    </span>
    <span class="see">
        <a href="/#/">see all</a>
    </span>
    <br><br>
    <div class="ui container">
      <div v-for="recipe in recipes">
        <!-- <div class="ui images"> -->
          <Recipe
            :imgUrl="recipe.imgUrl"
            :name="recipe.name"
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
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Nigerian jollof rice'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Banga soup'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Akara and pap (ogi)'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'fish moi-moi'
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
</style>
