<template>
  <div>
      <Navigation />
      <div class="ui container" style="margin-top:7%!important;">
        <h2 class="cookbook-title">
          {{ cookbook.name }}
        </h2>
        <div class="ui three statistics info message">
          <div class="statistic">
            <div class="value">
              {{ typeof cookbook.recipes === 'undefined' ? 0 : cookbook.recipes.length }}
            </div>
            <div class="label">
              Recipes
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              0
            </div>
            <div class="label">
              Subscribers
            </div>
          </div>
          <div class="statistic">
            <div class="value">
              4.74 <i class="tiny yellow star icon"></i>
            </div>
            <div class="label">
              Rating <br>
              <div class="ui star rating" data-rating="3"></div>
            </div>
          </div>
        </div>
        <div v-if="cookbook">
          <div class="ui description">
            <div class="ui message">
              <p>{{ cookbook.description }}</p>
            </div>
          </div>
          <br><br>
          <div class="pushable content">
            <div class="pusher">
              <div class="">
                <div class="ui meals container" v-if="typeof cookbook.recipes != 'undefined'">
                  <div class="meal section">
                    <div class="content active">
                        <div class="ui grid">
                          <div
                          class="sixteen wide mobile column
                                  sixteen wide tablet column
                                  eight wide computer column
                                  eight wide large screen column"
                                  v-for="recipe in cookbook.recipes"
                                  :id="recipe.id"
                            >
                            <router-link :to="{
                              name: 'Recipe',
                              params: {
                                  cookbookId: cookbook.id,
                                  recipeId: recipe.id
                                }
                              }">
                              <div class="serving card">
                                <div class="image wrapper">
                                  <div class="image"
                                    :style="{ 'background-image': 'url(' + recipe.imgUrl + ')' }">
                                  </div>
                                </div>
                                <div class="content">
                                  <div class="ui medium header">
                                     {{ recipe.name }}
                                  </div>
                                  <div class="tvn vertical fade clipped description">
                                    {{ recipe.description }}
                                  </div>
                                  <div class="footer options">
                                    <span class="left floated">
                                      <a href="/" title="download recipe">
                                        <i class="download icon"></i>
                                        5k+ Downloads
                                      </a>
                                    </span>
                                    <router-link :to="{
                                      name: 'Recipe',
                                      params: {
                                          cookbookId: cookbook.id,
                                          recipeId: recipe.id
                                        }
                                      }">
                                      <button class="ui primary right floated basic button">
                                        view recipe
                                      </button>
                                    </router-link>
                                  </div>
                                </div>
                              </div>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tvn horizontal stroke"></div>
                  </div>
                  <div v-if="cookbook.recipes.length === 0">
                    No recipes yet? Know a recipe?
                    <a href="/">Add Recipe</a>
                    <div class="ui ignored info message">
                      Go on about how this is community, how you might benefit how you might help save the world from poverty  and cancer.
                      We appreciate your contribution! Like mentioned earlier,
                      these requests are based on a pool system and the highest number
                      of requests gets prioritized. Click <code>Submit request</code>
                      button to send in your request and be notified if this request
                      makes it to our priority list. Please note that if we find your request very convincing,
                      we will schedule a skype meeting with you just for quality check. We like you and you know it!<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contact />
          <Bottom />
        </div>
      </div>
  </div>
</template>

<script>
import Navigation from './Navigation2'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
  mounted() {
    this.cookbook = this.$store.getters['get_cookbook'](this.$route.params.id)
  },

  data () {
    return {
      cookbook: {}
    }
  },
  components: {
    Navigation,
    Contact,
    Bottom
  },
  methods: {
    generateFlagClass: function (code) {
      let class_ = code + " flag";
      return class_;
    }
  },
  filters: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }
      return value
    }
  }
}
</script>

<style scoped="">
.cookbook-title {
  font-weight: 300;
  text-align: center;
  padding: 65px;
  font-size: calc(30px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.statistics {
  margin-bottom: 2%!important;
}
.description {
  font-weight: 400!important;
  margin-bottom: 2%!important;
  font-size: 17px;
  line-height: 1.43;
}
.description p {
  text-align: center!important;
}
</style>
