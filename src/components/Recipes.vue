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
                  four wide computer column
                  four wide large screen column" v-for="recipe in recipes.data">
                  <div class="ui link cards">
                    <div class="card">
                      <div class="image">
                        <img :src="recipe.imgUrl">
                      </div>
                      <div class="content">
                        <div class="header">
                          {{ recipe.name }}
                        </div>
                        <div class="meta">
                          <a>
                            {{ recipe.nutritional_detail}}
                          </a>
                        </div>
                        <div class="description">
                          {{ recipe.summary }}
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
