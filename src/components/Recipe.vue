<template>
<div>
	<Navigation />
	<div class="ui container main-content">
		<div class="ui grid">
			<div class="ui two wide computer colum sixteen wide mobile column">
				<div>
					<div class="ui red button">
						Add Rating &#38; review
					</div>
					<div class="ui rating item">
						<i class="yellow star icon"></i>
						<i class="yellow star icon"></i>
						<i class="yellow star half icon"></i>
					</div>
				</div>
				<hr />
				<div>
					Prep &#38; Cook time: {{ recipe.cook_time }}
				</div>
				<hr />
				<div>
					<b>Nutritional details</b> 
					<small>
						<h5 class="ui teal header">
							Calories: 416 kCal
						</h5>
					</small>
					<small>
						<h5 class="ui orange header">Fat: 16g </h5>
					</small>
					<small>
						<h5 class="ui purple header">
							Protein: 41g
						</h5>
					</small>
					<small>
						<h5 class="ui grey header">
							Carbs: 4g
						</h5>
					</small>
				</div>
				<hr />
				<div>
					<b>Servings: </b> 3<br>
				</div>
				<hr />
				<div>
					<span>
						<b>Submitted Varieties:</b>
					</span>
					<a href="/#/recipes/13/varieties">
						<span class="right foated" title="Follow link to view all varieties for this recipe">
							{{ getRecipeVaritiesCount(recipe.variations) }} 
						</span>
					</a>
				</div>
				<hr />
			</div>
			<div class="ui eleven wide computer column sixteen wide mobile column">
				<div class="sixteen wide column">
					<h3 id="recipe-name">
						{{ recipe.name }}
					</h3>
				</div>
				<div class="sixteen wide column">
					<div class="ui horizontal list">
						<div class="item">
							<img class="ui mini circular image" src="https://www.simplyrecipes.com/wp-content/uploads/2019/11/newheadshot-1-300x300.jpg">
							<div class="content">
								<div class="ui sub header">
									submitted by: <a href="/#/profiles/username">{{ recipe.user.name }}</a> (He/Him)
								</div>
								Professional Bartender at Tim Hortons <br>
								<small> Member since 2012 | 44K+ contributions | <i class="yellow star icon"></i><i class="yellow star icon"></i><i class="yellow star icon"></i><i class="yellow star icon"></i><i class="yellow star icon"></i></small>
							</div>
						</div>
					</div>
				</div>
				<div class="sixteen wide column">
					<div class="ui light blue label" v-for="ingredient in recipeIngredients(recipe.ingredients)" style="margin-top: 1%;">
						{{ ingredient }}
					</div>
				</div>
				<div class="sixteen wide column" style="margin-top:2%;">
					<img class="ui large image" :src="recipe.imgUrl" style="width:766px;!important">
				</div>
				<div class="sixteen wide column">
					<h3 class="ui header" style="padding:8px;">
						HOW TO PREPARE
					</h3>
				</div>
				<div class="ui sixteen wide column container">
					<h3>Step 1:</h3>{{ recipe.description }}
					<h3>Step 2:</h3>{{ recipe.description }}
					<h3>Step 3:</h3>{{ recipe.description }}
				</div>
			</div>
			<div class="ui three wide center aligned right floated column mobile hidden">
				<small>ad space</small>
				<img class="ui massive image" src="https://cookieandkate.com/images/2020/03/how-to-start-a-food-blog.jpg" />
				<small>ad space</small>
			</div>
		</div>
		<Contact />
		<Bottom />
    </div>
</div>
</template>

<script>
import Navigation from './Navigation'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
	mounted() {
		this.recipe = this.$store.getters['get_recipe'](
			this.$route.params.cookbookId,
			this.$route.params.recipeId
		)
	},
	created() {
		this.recipeName = this.recipe.name
	},
	data () {
		return {
			recipe: {
				id: '',
				coverImg: '',
				description: '',
				recipeName: ''
			}
		}
	},
	methods: {
		recipeIngredients: function(data) {
			return JSON.parse(JSON.parse(data)).data
		},
		getRecipeVaritiesCount(varieties) {
			return (varieties) ? varieties.length : 0
		},
		computeCarbs: function (val) {
			let carbVal = this.parseJson(val).carbs
			return  carbVal ? (carbVal + 'g') : (0 + 'g')
		},
	},
	components: {
		Navigation,
		Contact,
		Bottom
	}
}
</script>

<style scoped>
.title {
	font-weight: 900;
	margin-top: 0px;
	margin-left: -1px;
}
#recipe-name {
	text-transform: uppercase;
}
.main-content {
	margin-top: 18vh;
}
</style>

