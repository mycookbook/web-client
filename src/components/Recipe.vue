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
			<Breadcrumb :active="recipe.cookbook.name" :parentComponentName="'Cookbook'"
				:parentSlug="recipe.cookbook.slug" :child="recipe.name" />
			<div class="ui grid">
				<div class="sixteen wide computer column sixteen wide mobile column">
					<div class="ui mini images">
						<img class="ui image" :src="ingredient.thumbnail" v-for="ingredient in recipe.ingredients"
							:alt="ingredient.name" :title="ingredient.name" style="cursor:zoom-in"
							@click="ingredientLink(ingredient)">
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
								<div class="four wide computer column sixteen wide mobile column">
									<Claps />
								</div>
								<div class="four wide computer column sixteen wide mobile column">
									<div class="ui tbb disabled fluid mini button"
										title="Add a variation for this recipe, make it yours!">
										<i class="ui plus icon"></i>
										Customize
									</div>
								</div>
								<div class="four wide computer column sixteen wide mobile column">
									<div class="ui icon tbb fluid mini button"
										data-tooltip="click to copy the ingredients to your clipboard"
										data-position="top left" data-inverted="" id="clipboardMsg"
										@click="copyIngredients()">
										<i class="ui linkify icon"></i>
										Ingredients
									</div>
								</div>
								<div class="four wide computer column sixteen wide mobile column">
									<ReportIt />
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
			<div class="ui grid">
				<div class="sixteen wide computer column sixteen wide mobile column">
					<br />
					<div style="background-color:#1e272c;height:45px; width:20%; border-radius: 20px;">
						<div style="padding:15px;color:white;" class="shareIcons">
							<span style="margin-left:10px;">
								<i class="ui twitter icon" title="click to share on twitter"></i>
							</span>
							<span>
								<i class="ui paypal icon" title="we accept your kind donations"></i>
							</span>
							<span>
								<i class="ui linkify icon" title="copy link to this recipe"></i>
							</span>
							<span>
								<i class="ui bell icon" title="get notified when there are updates"></i>
							</span>
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

			for (let i = 0; i < recipe.ingredients.length; i++) {
				ingredientsList += "- " + recipe.ingredients[i].name + "\n"
			}

			let message = line1 + ingredientsList + lastLine

			navigator.clipboard.writeText(message).then(function () {
				$("#clipboardMsg").data("tooltip", "Copied!")
			})
		},
		textToSpeech(description) {
			$("#t2sIcon").removeClass("play")
			$("#t2sIcon").addClass("pause")

			// let cleanText = description.replace(/[<div</div><p></p><h3></h3><br /><ol></ol><li><>/li>]/g, '');
			let cleanText = "I'm still a Work In Progress!"
			// console.log(typeof cleanText)22

			const msg = new SpeechSynthesisUtterance();
			msg.text = cleanText;
			window.speechSynthesis.speak(msg);
			// window.speechSynthesis.addEventListener('voiceschanged', (event) => { })
			// onvoiceschanged = (event) => { }

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

.img-container .button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
}

.padded {
	padding-top: 30px;
	padding-bottom: 5px;
}

.hidden {
	display: none !important;
}

.show {
	display: block !important;
}

.shareIcons span {
	margin-right: 12% !important;
	cursor: pointer !important;
}
</style>
