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
		<div class="ui grid" style="margin-top: 15px;">
			<div class="sixteen wide column">
				<h3>
					<a class="ui red tag label">
						Hot deals
					</a>
				</h3>
				<img class="ui image" src="https://karmasnack.com/wp-content/uploads/2014/03/PIZZA.png" />
			</div>
		</div>
		<div class="ui grid">
			<div class="ui sixteen wide column">
				<h3>Holiday picks just for you</h3>
				<div class="ui horizontal images">
					<img class="ui small image" src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" />
					<img class="ui small image" src="https://www.eatwell101.com/wp-content/uploads/2019/12/peanut-butter-oatmeal-recipe-2.jpg" />
					<img class="ui small image" src="https://alittlebityummy.com/wp-content/uploads/2017/12/Quinoa-Porridge-with-Berries-_-Cinnamon-Portrait.jpg" />
					<img class="ui small image" src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" />
					<img class="ui small image" src="https://www.eatwell101.com/wp-content/uploads/2019/12/peanut-butter-oatmeal-recipe-2.jpg" />
					<img class="ui small image" src="https://alittlebityummy.com/wp-content/uploads/2017/12/Quinoa-Porridge-with-Berries-_-Cinnamon-Portrait.jpg" />
					<img class="ui small image" src="https://whipperberry.com/wp-content/uploads/2016/07/Jif-Peanut-Butter-Fruity-Breakfast-Hacks-by-WhipperBerry-3.jpg" />

				</div>
			</div>
		</div>
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
