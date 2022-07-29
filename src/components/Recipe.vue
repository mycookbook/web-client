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
					<div class="ui grid"
						style="border:1px solid rgb(255, 255, 255);border-radius:15px!important;background-color:rgb(255, 255, 255)">
						<div class="eight wide computer column sixteen wide mobile column ui fluid image"
							style="height:fit-content!important">
							<img :src="recipe.imgUrl" />
							<div class="ui header padded">
								HOW TO PREPARE
							</div>
							<div v-html="recipe.description" class="ui left aligned text"></div>
						</div>
						<div class="eight wide computer column sixteen wide mobile column">
							<div class="ui grid">
								<div class="sixteen wide computer column sixteen wide mobile column">
									<div class="ui buttons">
										<div class="ui button" title="copy link" @click="copyLink()">
											<i class="ui linkify icon"></i>
											Copy link
										</div>

										<div style="margin-right:1px;"></div>
										<Claps />

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
		window.scrollTo(0,0);
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
		copyLink() {
			let _link = process.env.APP_URL + '#' + this.$route.fullPath

			navigator.clipboard.writeText(_link).then(function () {
				alert('Link is copied to your clipboard.');
			});
		},
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
</style>
