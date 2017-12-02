<template>
  <div>
    <span class="subtitle">
      Explore
    </span>
    <span class="see">
      <a href="/#/">
        see all <i class="chevron right icon"></i>
      </a>
    </span>
    <br>
    <div class="ui container images-wrapper">
      <div v-for="cookbook in cookbooks">
        <!-- <div class="ui images"> -->
          <Cookbook
            :imgUrl="cookbook.imgUrl"
            :name="cookbook.name"
            :recipes="cookbook.recipes"
            :descr="cookbook.descr"
            :flag="cookbook.flag"
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
        recipes: '30k',
        descr: 'HEALTH & LIFESTYLE',
        flag: 'ng flag'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Aunty Yemisi Kitchen',
        recipes: '60k',
        descr: 'HOBBIST MANUAL',
        flag: 'us flag'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Naija Party Foods',
        recipes: '2',
        descr: 'NO DESCRIPTION',
        flag: 'ng flag'
      }, {
        imgUrl: '../assets/img/ketogenic.jpg',
        name: 'Indian cocktails',
        recipes: '1k',
        descr: 'NO DESCRIPTION',
        flag: 'in flag'
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
