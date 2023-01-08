<template>
  <div class="ui container">
    <Navigation />
    <div v-if="isLoading">
      <RecipeCardSkeleton />
    </div>
    <div v-else>
      <br /><br /><br />
      <Breadcrumb :active="recipe.cookbook.name" :parentComponentName="'Cookbook'" :parentSlug="recipe.cookbook.slug"
        :child="recipe.name" />
      <div class="ui grid">
        <div class="sixteen wide computer column sixteen wide mobile column">
          <div class="ui grid"
            style="border:1px solid rgb(255, 255, 255);border-radius:15px!important;background-color:rgb(255, 255, 255)">
            <div class="eight wide computer column sixteen wide mobile column ui fluid image"
              style="height:fit-content!important">
              <div class="ui mini images">
                <img class="ui image" :src="ingredient.thumbnail" v-for="ingredient in recipe.ingredients.data"
                  :alt="ingredient.name" :title="ingredient.unit + ' ' + ingredient.name" style="cursor:zoom-in"
                  @click="ingredientLink(ingredient)" :style="{'display':'inline-flex', 'height': '35px'}">
              </div>
              <img :src="recipe.imgUrl" :alt="recipe.name" class="zoom" />
              <div class="talkify-section">
                <div class="ui header padded">
                  <span>
                    HOW TO PREPARE
                  </span>
                  <span style="float:right;cursor: pointer!important;" @click="textToSpeech()">
                    <button class="ui right labeled icon tbb button">
                      <i class="right headphone icon"></i>
                      Listen
                    </button>
                    <span style="font-size: 14px;margin-left: -5px;font-weight: lighter;"></span>
                  </span>
                </div>
                <div v-html="recipe.description" class="ui left aligned text"></div>
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
                <div class="four wide computer column sixteen wide mobile column">
                  <div class="ui tbb fluid mini circular button" :class="{disabled: !_isLoggedIn}"
                    title="Add a variation for this recipe, make it yours!">
                    <i class="ui plus icon"></i>
                    Customize
                  </div>
                </div>
                <div class="four wide computer column sixteen wide mobile column">
                  <div class="ui icon tbb fluid mini circular button"
                    data-tooltip="Click to copy" data-position="top left"
                    data-inverted="" id="clipboardMsg" @click="copyIngredients()">
                    <i class="ui linkify icon"></i>
                    Copy ingredients
                  </div>
                </div>
                <div class="four wide computer column sixteen wide mobile column">
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

      let ingredients = recipe.ingredients.data
      console.log(ingredients)
      let ingredientsList = ""

      let line1 = "Ingredients list for " + recipe.name + "\n\n";
      let lastLine = "\n" + "Have fun!" + "\n" + ":heart: Team CookbooksHQ";

      for (let i = 0; i < ingredients.length; i++) {
        ingredientsList += "- " + ingredients[i].unit + ' ' + ingredients[i].name + "\n"
      }

      let message = line1 + ingredientsList + lastLine

      navigator.clipboard.writeText(message).then(function () {
        $("#clipboardMsg").data("tooltip", "Copied!")
      })
    },
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
        let google_search_url = "https://www.google.com/search?q=2 lbs red potatoes" + ingredient.name;

        if (ingredient.purchaseLink) {
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
