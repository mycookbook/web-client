<template>
<div>
	 <Navigation />
	 <div class="ui container" style="margin-top:10%!important;">
		 <div class="ui grid">
			 <div class="ui two wide colum">
				 Ratings 5 stars<br> <hr />
				 Created Yesterday<br> <hr />
				 Prep & cooktime 1Hr 30mins<br> <hr />
				 Nutritional details <br> <hr />
				 Servings 3<br> <hr />
				 <a href="">Varities 5+</a> <br> <hr />
			</div>
			<div class="ui eleven wide colum">
				 <div class="sixteen wide column">
					 <h3>
						{{ recipe.name.toUpperCase() }}
					 </h3>
				</div>
				<div class="sixteen wide column">
					<div class="ui horizontal list">
						<div class="item">
							<img class="ui mini circular image" src="https://semantic-ui.com/images/avatar2/small/eve.png">
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
					<img class="ui large image" :src="recipe.imgUrl" style="width:705px;!important">
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
	data () {
		return {
			recipe: {
				id: '',
				coverImg: '',
				description: ''
			}
		}
	},
	methods: {
		recipeIngredients: function(data) {
			return JSON.parse(JSON.parse(data)).data
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
</style>
