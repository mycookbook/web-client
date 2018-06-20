<template>
  <!-- content -->
  <div class="pushable content">

    <!-- loop through items here -->
    <div class="pusher">
      <div class="main">
        <div class="ui meals container">
          <div class="meal section">

            <div class="ui courses accordion">

              <div class="content active">
                <div class="ui grid">
                  <div class="sixteen wide mobile column
                                sixteen wide tablet column
                                eight wide computer column
                                eight wide large screen column" v-for="recipe in recipes.data">
                    <div class="serving card">
                      <div class="image wrapper">
                        <div class="image" :style="{ 'background-image': 'url(' + recipe.imgUrl + ')' }">
                        </div>
                      </div>
                      <div class="content">
                        <div class="ui sub header">
                          {{ recipe.name }}
                        </div>
                        <div class="ui medium header">
                          Ingredients:
                        </div>
                        <div style="display:flex;">
                          <div class="ui sub heading" v-for="ingr, i in recipe.ingredients">
                            <div class="ingr">
                              <p>{{ ingr }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="tvn vertical fade clipped description">
                        </div>
                        <div class="footer options">
                          <div class="ui right floated basic button">
                            how to prepare
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tvn horizontal stroke"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    let url = process.env.BASE_URL + '/recipes'
    this.$http.get(url)
    .then((response) => {
      this.recipes = response.body.data;
      console.log('vm rcipes', this.recipes)
    }, (error) => {
      console.log('error', error)
    })
  },
  data () {
    return {
      recipes: {}
    }
  }
}
</script>

<style>
.ingr {
  margin:2px;
  background-color: #eee;
  border-radius: 5px;
}
.ingr p {
    padding: 3px;
}
</style>
