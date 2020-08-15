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
	  if (this.$store.state.cookbookStore.cookbooks.length == 0 || this.$store.state.cookbookStore.cookbooks === null) {
		  store.dispatch('load_cookbooks')
		  store.dispatch('load_definitions')
	  } 
  },
  computed: {
    cookbooks() {
		return this.$store.state.cookbookStore.cookbooks
	},
	filters() {
		if (this.$store.state.cookbookStore.definitions.categories.contents) {
			return JSON.parse(this.$store.state.cookbookStore.definitions.categories.contents)
		}
	}
  },
  data () {
    return {}
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
