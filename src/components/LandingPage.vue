<template>
<div>
	<div class="ui container">
		<div>
			<Navigation />
			<Search />
			<br /> <br />
			<div v-if="!loaded()">
				<DefaultSkeleton />
			</div>
			<div v-else>
				<QuickSort :filters="filters()" :cookbooks="cookbooks()" />
				<Contact />
				<Bottom />
			</div>
		</div>
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
import DefaultSkeleton from './Skeletons/DefaultSkeleton.vue'
import PopularDemand from './PopularDemand.vue'

export default {
	name: "LandingPage",
	async mounted () {
		store.dispatch('boot')
	},
	methods: {
		loaded() {
			if ((this.$store.state.cookbookStore.cookbooks !== undefined) && (this.$store.state.cookbookStore.definitions.categories.contents !== undefined)) {
				return true
			}
		},
		cookbooks() {
			return this.$store.state.cookbookStore.cookbooks
		},
		filters() {
			return JSON.parse(this.$store.state.cookbookStore.definitions.categories.contents)
		}
	},
	components: {
		Search,
		Navigation,
		Contact,
		Bottom,
		QuickSort,
		DefaultSkeleton,
		PopularDemand
	},
}
</script>
