<template>
  <!-- content -->
  <div class="pushable content">
    <div class="pusher">
      <div class="main">
        <div class="ui meals container">
          <div class="meal section">
            <div class="tvn vertical stroke"></div>
            <div class="tvn sonar on">
              <div class="wave"></div>
            </div>
            <div class="ui title header">Explore</div>
            <div class="ui courses accordion">
              <div class="tvn collapsible title active">
                <div class="tvn horizontal stroke"></div>
                <div class="ui sub header">less/more</div>
                <div class="tvn horizontal stroke"></div>
                <div class="toggle">
                  <svg class="tvn icon">
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
              </div>
              <div class="content active">
                <div class="ui grid">
                  <div v-if="cookbooks" class="sixteen wide mobile column
                                sixteen wide tablet column
                                eight wide computer column
                                eight wide large screen column" v-for="cookbook in cookbooks">
                    <div class="serving card">
                      <div class="image wrapper">
                        <div class="image"
                          :style="{ 'background-image': 'url(' + cookbook.bookCoverImg + ')' }">
                        </div>
                      </div>
                      <div class="content">
                        <div class="ui sub header">
                           {{ cookbook.recipes.length }} Recipe(s)
                           <span :style="{ 'float': 'right' }">
                             <i :class="generateFlagClass(cookbook.flag)"></i>
                           </span>
                        </div>
                        <div class="ui medium header">
                           {{ cookbook.name }}
                        </div>
                        <div class="tvn vertical fade clipped description">
                          {{ cookbook.description }}
                        </div>
                        <div class="footer options">
                          <div class="ui huge star rating" data-rating="5"></div>
                          <div class="ui right floated basic button">Add Review</div>
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
    let url = process.env.BASE_URL + '/cookbooks'
    this.$http.get(url)
    .then((response) => {
      this.cookbooks = response.body.data;
      console.log('vm cookbooks', this.cookbooks)
    }, (response) => {
      console.log('error', response)
    })
  },
  data () {
    return {
      cookbooks: {}
    }
  },
  methods: {
    generateFlagClass: function (code) {
      let class_ = code + " flag";
      return class_;
    }
  }
}
</script>

<style>

</style>
