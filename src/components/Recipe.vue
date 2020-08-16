<template>
<div>
	 <Navigation />
	 <div class="ui container" style="margin-top:10%!important;">
		 <div class="ui grid">
			 <div class="ui two wide colum">
				 <h3>User Ratings</h3>
				 <i class="yellow star icon"></i>
				 <i class="yellow star icon"></i>
				 <i class="yellow star icon"></i>
				 <i class="yellow star icon"></i>
				 <i class="yellow star half icon"></i><br> <hr />
				 <i class="clock outline icon"></i> {{ recipe.cook_time }} <br> <hr />
				 <b>Nutritional details</b> <br> 
				 <small>
					 Calories: 416 kCal
				 </small>
				 <br>
				 <small>
					 Fat: 16g
				 </small>
				 <br>
				 <small>
					 Protein: 41g
				 </small>
				 <br>
				 <small>
					 Carbs: 4g
				 </small>
				 <hr />
				 <b>Servings: </b> 3<br> <hr />
				 <span class="left floated">
						 <b>Varieties: </b>
					 </span>
				 <a href="/#/recipes/13/varieties">
					 
					 <span class="right foated" title="Follow link to view all varieties for this recipe">
						 {{ getRecipeVaritiesCount(recipe.variations) }} 
					 </span>
				</a> <br> <hr />
			</div>
			<div class="ui eleven wide colum">
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
									submitted by: {{ recipe.user.name }} (He/Him)
								</div>
								Professional chef at Macys <br>
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
						How to prepare
					</h3>
				</div>
				<div class="sixteen wide column">
					description
				</div>
			</div>
			<div class="three wide center aligned right floated column">
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
</style>
