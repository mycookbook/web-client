<template>
  <div>
    <span class="subtitle">
      COOKBOOKS
    </span>
    <span class="see">
        <a href="/#/">see all</a>
    </span>
    <br>
    <div class="ui container images-wrapper">
      <div v-for="cookbook in cookbooks">
        <!-- <div class="ui images"> -->
          <Cookbook
            :imgUrl="cookbook.imgUrl"
            :name="cookbook.name"
            :recipes="cookbook.recipes"
          />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Cookbook from './Cookbook.vue'

export default {
  data () {
    return {
      cookbooks: [{
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Ketogenic Lifestyle',
        recipes: '30m'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Aunty Yemisis Kitchen',
        recipes: '30m'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Naija Prty Foods',
        recipes: '30m'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Bar cocktails',
        recipes: '30m'
      }]
    }
  },
  components: {
    Cookbook: Cookbook
  }
}
</script>

<style scoped>
.subtitle {
  font-size: 25px;
  font-weight: 900;
  padding-left:15px;
}
.see {
  float: right;
}
.images-wrapper {
  display: flex!important;
  flex-direction: row!important;
}
</style>
