<template>
<div>
	<div class="ui container">
		<div>
			<Navigation />
			<Search />
			<div v-if="loaded()">
				<QuickSort :filters="filters()" :cookbooks="cookbooks()" />
				<div class="ui grid" style="margin-top: 15px;">
					<div class="sixteen wide column">
						<h3>
							<a class="ui red tag label">
								Save Money
							</a>
						</h3>
						<img class="ui image" src="https://karmasnack.com/wp-content/uploads/2014/03/PIZZA.png" />
					</div>
				</div>
				<div class="ui grid">
					<div class="ui sixteen wide column">
						<h3>Based on popular demand</h3>
						<div class="ui four column grid">
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://www.eatwell101.com/wp-content/uploads/2019/12/peanut-butter-oatmeal-recipe-2.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
							<div class="column" href="/">
								<a href="/">
									<img class="ui image" 
										src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" 
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="ui grid">
					<div class="ui sixteen wide column">
						<h3>
							The Most Epic Rice Recipe Ever by Master Chef • Taste Show
						</h3>
						<div class="ui embed" data-url="https://www.youtube.com/embed/S1LB4t34X08" data-placeholder=""></div>
					</div>
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
		QuickSort
	},
}
</script>
