<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: LandingPage.vue
@Last modified by:   florenceokosun
@Last modified time: 01-01-2018
-->

<template>
  <div>
    <div class="ui container">
      <Navigation />
      <Search />
      <QuickSort :filters="filters" :cookbooks="cookbooks" />
      <Contact />
      <Bottom />
    </div>
  </div>
</template>

<script>
import store from '@/store'
import Navigation from './Navigation2.vue'
import Search from './Search2.vue'
import QuickSort from './QuickSort.vue'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
  name: "LandingPage",
  mounted () {
    if (this.$store.state.cookbooks.length == 0 || this.$store.state.cookbooks === null) {
      store.dispatch('load_cookbooks')
    }
  },
  computed: {
    cookbooks() {
      return this.$store.state.cookbooks
    }
  },
  data () {
    return {
      filters: [
        {
          'id': 'ketogenic',
          'name': 'Ketogenic',
          'title': 'The ketogenic road map to healthy living'
        },
        {
          'id': 'fitfam',
          'name': 'FitFam Family',
          'title': 'Low carbs, calorie counts healthy foods'
        },
        {
          'id': 'vegan',
          'name': 'Vegan',
          'title': 'Nigerian vegan or American Vegan'
        },
        {
          'id': 'health-and-wellness',
          'name': 'Health & Wellness',
          'title': 'Cardio, healthy living, homemade recipes'
        },
        {
          'id': 'nationality',
          'name': 'Nationality',
          'title': 'Categorises Cookbooks from different countries'
        }
      ]
    }
  },
  components: {
    Search,
    Navigation,
    Contact,
    Bottom,
    QuickSort
  },
}
</script>
