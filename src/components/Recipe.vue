<template>
	<div class="ui container">
		<Navigation />
		<div v-if="isLoading">
			<RecipeCardSkeleton />
		</div>
		<div v-else>
			<!-- <div class="ui grid center">
				<div class="ui sixteen wide computer column sixteen wide tablet column sixteen wide mobile column">
					<AutoComplete />
				</div>
			</div> -->
			<br /><br /><br />
			<!-- <br /><br /> -->
			<Breadcrumb :active="recipe.cookbook.name + ' < ' + recipe.name" />
			<div class="ui grid">
				<div class="sixteen wide computer column sixteen wide mobile column">
					<div class="ui mini images">
						<img class="ui image" :src="ingredient.thumbnail" v-for="ingredient in recipe.ingredients"
								:alt="ingredient.name" :title="ingredient.name" style="cursor:zoom-in" @click="ingredientLink(ingredient)">
					</div>
					<div class="ui grid"
						style="border:1px solid rgb(255, 255, 255);border-radius:15px!important;background-color:rgb(255, 255, 255)">
						<div class="eight wide computer column sixteen wide mobile column ui fluid image"
							style="height:fit-content!important">
							<img :src="recipe.imgUrl" :alt="recipe.name" class="zoom" />
							<div class="ui header padded">
								<span>
									HOW TO PREPARE
								</span>
								<span style="float:right;cursor: pointer!important;"
									@click="textToSpeech(recipe.description)">
									<i class="ui small play circle green icon" id="t2sIcon"></i>
									<span style="color:green;font-size: 14px;margin-left: -5px;font-weight: lighter;">
										Listen
									</span>
								</span>
							</div>
							<div v-html="recipe.description" class="ui left aligned text"></div>
						</div>
						<div class="eight wide computer column sixteen wide mobile column">
							<div class="ui grid">
								<div class="sixteen wide computer column sixteen wide mobile column">
									<div class="ui mini buttons">
										<Claps />
										<div style="margin-right:1px;"></div>

										<div class="ui tbb disabled button"
											title="Add a variation for this recipe, make it yours!">
											<i class="ui plus icon"></i>
											Add customization
										</div>

										<div style="margin-right:1px;"></div>

										<div class="ui tbb button" title="copy link" @click="copyIngredients()">
											<i class="ui linkify icon"></i>
											Copy ingredients
										</div>

										<div style="margin-right:1px;"></div>
										<ReportIt />
									</div>
								</div>
							</div>
							<div class="ui grid">
								<div class="sixteen wide computer column sixteen wide mobile column">
									<Follow :followers="recipe.author.followers" :author="recipe.author.name"
										:avatar="recipe.author.avatar" :handle="recipe.author.name_slug" />
								</div>
							</div>
							<div class="ui horizontal divider"></div>
							<div class="ui grid">
								<div class="sixteen wide computer column sixteen wide mobile column">
									<Comments :comments="_recipeComments" :author_id="recipe.id" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Contact />
		<Bottom />
	</div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import RecipeCardSkeleton from './Skeletons/RecipeCardSkeleton.vue';
import ReportIt from './ReportIt.vue';
import Claps from './Claps.vue';
import NutritionalDetail from './NutritionalDetail.vue';
import AutoComplete from './AutoComplete.vue';
import Breadcrumb from './Breadcrumb.vue';
import Comments from './Comments.vue';
import Follow from './Follow.vue';

export default {
	mounted() {
		window.scrollTo(0, 0);
		let id = (!this.$route.params.id) ? this.$route.params.slug : this.$route.params.id
		this.$store.dispatch('fetch_recipe', id)
	},
	props: [
		'slug',
		'id'
	],
	computed: {
		recipe() {
			let token = this.$store.state.access_token

			return this.$store.state.recipe
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		},
		_recipeComments() {
			this.recipeComments = this.$store.state.recipe.comments

			return this.recipeComments;
		}
	},
	data() {
		return {
			links: {
				breadcrumbs: {
					cookbookLink: '/cookbook/'
				},
				varietiesPageLink: '/recipes/'
			},
			recipeComments: []
		};
	},
	methods: {
		copyIngredients() {
			const recipe = this.$store.state.recipe

			let ingredients = JSON.stringify(recipe.ingredients)
			let ingredientsList = ""

			let line1 = "Ingredients list for " + recipe.name + "\n\n";
			let lastLine = "\n" + "Have fun!" + "\n" + ":heart: Team CookbooksHQ";

			for(let i=0;i<recipe.ingredients.length;i++) {
				ingredientsList += "- " + recipe.ingredients[i].name + "\n"
			}

			let message = line1 + ingredientsList + lastLine

			navigator.clipboard.writeText(message).then(function () {
				alert('Ingredients copied to your clipboard.');
			});
		},
		textToSpeech(description) {
			$("#t2sIcon").removeClass("play")
			$("#t2sIcon").addClass("pause")

			// let cleanText = description.replace(/[<div</div><p></p><h3></h3><br /><ol></ol><li><>/li>]/g, '');
			let cleanText = "I'm still a Work In Progress!"
			// console.log(typeof cleanText)

			const msg = new SpeechSynthesisUtterance();
			msg.text = cleanText;
			window.speechSynthesis.speak(msg); 
			// $("#t2sIcon").removeClass("pause")
			// $("#t2sIcon").addClass("play")
		},
		ingredientLink(ingredient) {
			let url = ""
			let google_search_url = "https://www.google.com/search?q=" + ingredient.name;

			if (ingredient.purchaseLink) {
				url = ingredient.purchaseLink
			} else {
				url = google_search_url
			}
			
			window.open(url, '_blank').focus();
		}
	},
	components: {
		RecipeCardSkeleton,
		Navigation,
		Contact,
		Bottom,
		ReportIt,
		Claps,
		NutritionalDetail,
		AutoComplete,
		Breadcrumb,
		Comments,
		Follow
	},
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}

.breadcrumb .section {
	text-transform: uppercase;
	margin-bottom: 15px;
	font-size: smaller !important;
}

.main-content {
	margin-top: 18vh;
}

.transformToCapitalize {
	text-transform: capitalize;
}

.img-container {
	margin-top: 2%;
	position: relative;
	width: 100%;
}

.img-container img {
	width: 100%;
	height: auto;
}

.img-container .button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
}

.description-contents {
	overflow-x: auto !important;
	overflow-y: hidden !important;
}

.padded {
	padding-top: 30px;
	padding-bottom: 5px;
}

.spaced div {
	padding-top: 4px !important;
	padding-bottom: 4px !important;
}

/* .zoom {
	padding: 0px;
	transition: transform .2s;
	margin: 0 auto;
	cursor: zoom-in;
}

.zoom:hover {
	transform: scale(1.3);
	transition-duration: 1s, 1s;
} */
</style>
