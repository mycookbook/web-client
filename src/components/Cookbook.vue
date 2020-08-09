<template>
  <div>
      <Navigation />
      <div class="ui container" style="margin-top:7%!important;">
        <h2 class="cookbook-title">
          {{ cookbook.name }}
        </h2>
        <div v-if="cookbook">
          <div class="ui description">
            <div class="ui message">
            	<p class="ui centered text">
					<small>
						{{ cookbook.description }}
					</small>
				</p>
            </div>
          </div>
          <br><br>
          <div>
            <div>
              <div>
                <div v-if="typeof cookbook.recipes != 'undefined'">
                  <div>
                    <div>
                        <div>
                          <div class="sixteen wide mobile column
                                  sixteen wide tablet column
                                  eight wide computer column
                                  eight wide large screen column"
                                  v-for="recipe in cookbook.recipes"
                                  :id="recipe.id"
                            >
							<div class="ui grid">
								<div class="two column row">
									<div class="fifteen wide column">
										<router-link :to="{
											name: 'Recipe',
											params: {
												cookbookId: cookbook.id,
												recipeId: recipe.id
												}
											}">
											<div class="ui header">
												<h2>{{ recipe.name }}</h2>
											</div>
										</router-link>
										<div>
											<i class="clock outline icon"></i> 
											{{ recipe.cook_time }}
											<span style="float:right">
												<em>
													NUTRITIONAL INFO
												</em>
											</span>
										</div>
										<div>
											<small>
												
											</small>
										</div>
										<div class="ui grid">
											<div class="three column row">
												<div class="two wide column">
													<router-link :to="{
														name: 'Recipe',
														params: {
															cookbookId: cookbook.id,
															recipeId: recipe.id
															}
														}">
														<img class="ui medium image" :src="recipe.imgUrl" style="margin-left: -12px!important">
													</router-link>	
												</div>
												<div class="eleven wide column">
													{{ recipe.summary }}
												</div>
											</div>
										</div>
										<div class="ui grid">
											<div class="ui three wide column">
												<h6 class="ui blue header" style="text-transform: uppercase; position: absolute; top: -10%">
													by {{ recipe.user.name }}
												</h6>
												<span>
													<p>
														{{ recipe.variations.length }} varieties
													</p>
												</span>
												<span>
													<a class="ui tiny default button" @click=addVariety()>
														+ Add variety
													</a>
												</span>
											</div>
											<div class="ui thirteen wide column labels">
												<div class="ui blue label" v-for="ingredient in recipe.ingredients">
													{{ ingredient }}
												</div>
											</div>
										</div>
									</div>
									<div class="one wide column">
										<b>ad space</b>
									</div>
								</div>
							</div>
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
	},
	addVariety: function () {
		alert('adding variety ...')
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
