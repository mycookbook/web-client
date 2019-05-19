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
              {{ cookbook.recipes.length }}
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
        <div v-if="cookbook.recipes.length > 0">
          <div class="ui description">
            <div class="ui message">
              <p>{{ cookbook.description }}</p>
            </div>
          </div>
          <br><br>
          <div class="ui special cards">
            <div class="card" v-for="recipe in cookbook.recipes">
              <div class="blurring dimmable image">
                <div class="ui dimmer">
                  <div class="content">
                    <div class="center">
                      <div class="ui inverted button">VIEW RECIPE</div>
                    </div>
                  </div>
                </div>
                <img :src="recipe.imgUrl">
              </div>
              <div class="content">
                <div class="header">
                  {{ recipe.name }}
                </div>
                <div class="meta">
                  <span class="date">Created in Sep 2014</span>
                </div>
                <div class="description">
                  {{ recipe.summary }}
                </div>
                <div class="description">
                  <br><br>
                  <div class="item">---- INGREDIENTS ----</div>
                  <div class="ui list" v-for="ingredient in recipe.ingredients">
                    <div>{{ ingredient }}</div>
                  </div>
                </div>
                <div class="description">
                  <div class="item">---- PREPARATION ----</div>
                  <div class="ui list">
                    <div>{{ recipe.description | truncate(180) }}</div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <span class="left floated">
                  <a href="/" title="download recipe">
                    <i class="download icon"></i>
                  </a>
                </span>
                <span class="right floated">
                  5k+ Downloads
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
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
</template>

<script>
import Navigation from './Navigation2'

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
    Navigation
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
