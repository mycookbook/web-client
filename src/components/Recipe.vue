<template>
	<div class="ui container">
		<Navigation />
		<div v-if="isLoading">
			<RecipeCardSkeleton />
		</div>
		<div v-else>
			<Breadcrumb :active="recipe.cookbook.name" :parentComponentName="'Cookbook'" :parentSlug="recipe.cookbook.slug"
				:child="recipe.name" />
			<div class="ui grid">
				<div class="sixteen wide computer column sixteen wide mobile column">
					<div class="ui grid"
						style="border:1px solid rgb(255, 255, 255);border-radius:15px!important;background-color:rgb(255, 255, 255)">
						<div class="eight wide computer column sixteen wide mobile column ui fluid image"
							style="height:fit-content!important">
							<div v-if="hasIngredients" class="ui small info message">
								<em>
									Click on the images to see or shop the Ingredient
								</em>
							</div>
							<div class="ui mini images" v-if="hasIngredients">
								<img class="ui image" :src="ingredient.thumbnail"
									v-for="ingredient in recipe.ingredients.data" :alt="ingredient.name"
									:title="ingredient.unit + ' ' + ingredient.name" style="cursor:zoom-in"
									@click="ingredientLink(ingredient)"
									:style="{ 'display': 'inline-flex', 'height': '35px' }"
									v-if="ingredient.hasOwnProperty('thumbnail') && ingredient.thumbnail != ''">
							</div>
							<img :src="recipe.imgUrl" :alt="recipe.name" class="zoom" />
							<div class="talkify-section">
								<div class="ui header padded">
									<span>
										HOW TO PREPARE
									</span>
									<span style="float:right;cursor: pointer!important;" @click="textToSpeech()">
										<button class="ui right labeled icon tbb disabled button">
											<i class="right headphone icon"></i>
											Listen
										</button>
										<span style="font-size: 14px;margin-left: -5px;font-weight: lighter;"></span>
									</span>
								</div>
								<div v-if="recipe.description">
									<div v-html="recipe.description" class="ui left aligned text"></div>
								</div>
								<div v-else>
									<div class="ui left aligned text padded">
										<i>TODO: pop up banner to display this message in a fun way.</i>
										<p>Do you know how to prepare this recipe? Earn up to $$$ by submitting a how to
											prepare instructions.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="eight wide computer column sixteen wide mobile column">
							<div class="ui grid">
								<div class="sixteen wide computer column sixteen wide mobile column">
									<Follow :followers="recipe.author.followers" :author="recipe.author.name"
										:avatar="recipe.author.avatar" :handle="recipe.author.name_slug" />
								</div>
							</div>
							<div class="ui horizontal divider"></div>
							<div class="ui grid">
								<div class="four wide computer column sixteen wide mobile column">
									<Claps />
								</div>
								<div class="six wide computer column sixteen wide mobile column" id="ingredients">
									<div class="ui hidden">{{ ingredients }}</div>
									<CopyCopiedButtonsWidget htmlTagId="ingredients" tooltip="copy ingredients"
										btnText="Copy Ingredients" />
								</div>
								<div class="six wide computer column sixteen wide mobile column">
									<ReportIt />
								</div>
							</div>
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
import store from '@/store';
import CopyCopiedButtonsWidget from './Widgets/CopyCopiedButtonsWidget.vue';

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
			return this.$store.state.recipe
		},
		hasIngredients() {
			if (this.$store.state.recipe.hasOwnProperty("ingredients")) {
				return this.$store.state.recipe.ingredients.length > 0
			}
			return false;
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		},
		_recipeComments() {
			this.recipeComments = this.$store.state.recipe.comments

			return this.recipeComments;
		},
		_isLoggedIn() {
			let hasSession = (store.state.access_token !== null)

			this.isLoggedIn = true

			if (!hasSession) {
				this.isLoggedIn = false
			}

			return this.isLoggedIn
		},
		ingredients() {
			const recipe = this.$store.state.recipe

			let ingredients = recipe.ingredients

			if (ingredients.hasOwnProperty('data')) {
				let ingredientsList = ""
				let line1 = "Ingredients list for " + recipe.name + "\n\n";
				let lastLine = "\n" + "Have fun!" + "\n" + ":heart: Team CookbooksHQ";

				for (let i = 0; i < ingredients.data.length; i++) {
					ingredientsList += "- " + ingredients.data[i].unit + ' ' + ingredients.data[i].name + "\n"
				}

				return line1 + ingredientsList + lastLine
			} else {
				return "There is no ingredients on this recipe yet."
			}
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
		textToSpeech() {
			talkify.config.debug = false;
			talkify.config.useSsml = false;

			talkify.config.remoteService.apiKey = process.env.TALKIFY_KEY;
			talkify.config.ui.audioControls.enabled = true;

			var player = new talkify.TtsPlayer()
				.enableTextHighlighting();

			player.forceVoice({ name: 'Zira', description: "Zira" });

			var playlist = new talkify.playlist()
				.begin()
				.usingPlayer(player)
				.withRootSelector('.talkify-section')
				.withTextInteraction()
				.build();

			playlist.play();
		},
		ingredientLink(ingredient) {
			let url = ""
			if (!ingredient.link) {
				let google_search_url = "https://www.google.com/search?q=" + ingredient.name;

				if (ingredient.hasOwnProperty('purchaseLink')) {
					url = ingredient.purchaseLink
				} else {
					url = google_search_url
				}
			} else {
				url = ingredient.link
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
		Follow,
		CopyCopiedButtonsWidget
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
