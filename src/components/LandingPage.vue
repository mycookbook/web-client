<template>
<div>
	<div class="ui container">
		<div>
			<Navigation />
			<div v-if="!userIsLoggedIn">
				<Search />
                {{ userIsLoggedIn }}
			</div>
            {{ userIsLoggedIn }}
			<br /> <br />
			<div v-if="!loaded()">
				<DefaultSkeleton />
			</div>
			<div v-else>
				<div v-if="userIsLoggedIn">
					<Feed />
				</div>
				<div v-else>
					<QuickSort :filters="filters()" :cookbooks="cookbooks()" />
				</div>
				
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
import Feed from './Feed.vue'

export default {
	name: "LandingPage",
	async mounted () {
		this.$store.dispatch('boot')
	},
	computed: {
		userIsLoggedIn() {
			return this.$store.state.access_token
		}
	},
	methods: {
		loaded() {
			if (
                this.$store.state.cookbookStore.hasOwnProperty("cookbooks") && 
                this.$store.state.cookbookStore.hasOwnProperty("definitions")
            ) {
				return true
			}

            return false
		},
		cookbooks() {
			return this.$store.state.cookbookStore.hasOwnProperty("cookbooks") ? 
            this.$store.state.cookbookStore.cookbooks.data : 
            []
		},
		filters() {
            if (this.$store.state.cookbookStore.hasOwnProperty("definitions")) {
                return JSON.parse(this.$store.state.cookbookStore.definitions.categories.contents)
            }

            return []
		}
	},
	components: {
    Search,
    Navigation,
    Contact,
    Bottom,
    QuickSort,
    DefaultSkeleton,
    PopularDemand,
    Feed
},
}
</script>
