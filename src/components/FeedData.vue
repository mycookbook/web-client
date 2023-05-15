<template>
  <div style="margin-top:25px;">
    <div>
      <div class="ui grid">
        <FourWideCircularImage imgUrl="https://shorturl.at/dhlBD" imgTitle="example" />
        <div class="twelve wide computer column">
          <div class="content">
            <div class="summary" style="margin-left:-23%!important;">
              <a href="/#/contributors/test-user">The Indian guy next door</a> added a new recipe in <a
                href="/#/search?q=:tags|recipes vegan">vegan
              </a>
              <span style="float:right!important;">Proudly <i class="in flag" title="Nationality"></i></span>
              <div class="date">
                2 mins ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="ui massive image">
        <a href="/#/recipes/non" title="Recipe title">
          <img
            src="https://static5.depositphotos.com/1001001/469/i/600/depositphotos_4690741-stock-photo-chef-cooking-wok.jpg"
            alt="">
        </a>
      </div>
      <br /><br />
      <Comments :comments="_recipeComments" :author_id="author_id" />
    </div>
    <br /><br /><br />
    <div>
      <div class="ui grid">
        <FourWideCircularImage imgUrl="https://shorturl.at/dhlBD" imgTitle="example" />
        <div class="twelve wide computer column">
          <div class="content">
            <div class="summary" style="margin-left:-23%!important;">
              <a href="/#/contributors/test-user">Tiny Chef</a> added a new recipe in <a
                href="/#/search?q=:tags|recipes vegan">vegan
              </a>
              <span style="float:right!important;">Proudly <i class="ca flag" title="Canadian"></i></span>
              <div class="date">
                2 mins ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="ui massive image">
        <a href="/#/recipes/non" title="Recipe title">
          <img
            src="https://thumbs.dreamstime.com/b/pickled-bamboo-shoots-catfish-sour-spicy-soup-thai-food-pickled-bamboo-shoots-catfish-sour-spicy-soup-thai-159694090.jpg"
            alt="">
        </a>
      </div>
      <br /><br />
      <Comments :comments="_recipeComments" :author_id="author_id" />
    </div>
  </div>
</template>

<script>
import FourWideCircularImage from './FourWideCircularImage.vue'
import Comments from './Comments.vue';

export default {
  name: "FeedData",
  computed: {
    _recipeComments() {
      return []
    },
    author_id() {
      return 1
    }
  },
  components: {
    Comments,
    FourWideCircularImage
  },
  methods: {
    addClap() {
      alert('tbd')
    }
  }
};
</script>

<style scoped>
.meta {
  width: 93% !important;
}

img {
  border-radius: 8px !important;
}
</style>
