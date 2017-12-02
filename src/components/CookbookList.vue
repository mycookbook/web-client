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
        imgUrl: 'static/ketogenic.jpg',
        name: 'Ketogenic Lifestyle',
        recipes: '30K',
        descr: 'HEALTH & LIFESTYLE',
        flag: 'ng flag'
      }, {
        imgUrl: 'static/auntie-yemisi.jpg',
        name: 'Aunty Yemisi Kitchen',
        recipes: '60K',
        descr: 'HOBBIST MANUAL',
        flag: 'us flag'
      }, {
        imgUrl: 'static/naija-party.jpg',
        name: 'Nigerian Party Specials',
        recipes: '20K',
        descr: 'A.K.A OWAMBE',
        flag: 'ng flag'
      }, {
        imgUrl: 'static/indian-cocktail.jpg',
        name: 'Indian cocktails',
        recipes: '1k',
        descr: 'YUM YUM',
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
