<template>
<div>
	<Navigation />
	<div class="ui container main-content">
		<div class="ui grid">
			<div class="ui two wide computer column sixteen wide mobile column">
				<div>
					<div class="add-clap" @click="addClap()">
						<b>Add Clap 2.8K</b>
					</div>
				</div>
				<hr />
				<div>
					Prep &#38; Cook time: 
				</div>
				<hr />
				<div>
					<b> {{ recipe.cook_time }} </b>
				</div>
				<hr />
				<div>
					<div>Nutritional details</div> 
					<hr />
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
					<b>Servings: </b> 
					{{ recipe.servings }}
					<br>
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
				<div class="ui red button">
					Report
				</div>
				<div>
					<small>
						Report this recipe if you think this content is not original, is stolen, or is a duplicate. 
						If this is your original content, kindly provide as much detail as possible to enable us 
						investigate and delete the content from our servers. Alternatively, you can signup and become a cookbook contributor
						and ask this content's ownership to be transferred to you.
					</small>
				</div>
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
							<img class="ui mini circular image" :src="recipe.user.avatar">
							<div class="content">
								<div class="ui sub header">
									submitted by: <a href="/#/profiles/username">{{ recipe.user.name }}</a> {{ recipe.user.pronouns }}
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
				<div class="ui sixteen wide column container" v-html="recipe.description"></div>
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
		getRecipeVaritiesCount: function (varieties) {
			return (varieties) ? varieties.length : 0
		},
		addClap: function() {
			alert('adding rating')
		}
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

