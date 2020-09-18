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
import Navigation from './Navigation.vue'
import Search from './Search.vue'
import QuickSort from './QuickSort.vue'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
	name: "LandingPage",
	mounted () {
		store.dispatch('load_definitions')
		store.dispatch('load_cookbooks')
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
	components: {
		Search,
		Navigation,
		Contact,
		Bottom,
		QuickSort
	},
}
</script>
