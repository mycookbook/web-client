<template>
  <div class="ui feed">
    <div class="event">
      <div class="label">
        <FourWideCircularImage
          imgUrl="https://st4.depositphotos.com/1017986/25404/i/600/depositphotos_254046280-stock-photo-happy-male-indian-chef-in.jpg"
          imgTitle="example" />
      </div>
      <div class="content">
        <div class="summary">
          <a href="/#/contributors/test-user">The Indian guy next door</a> added a new recipe in <a
            href="/#/search?q=:tags|recipes vegan">vegan</a>
          <div class="date">
            2 mins ago
          </div>
        </div>
        <div class="meta">
          <span style="float:left!important;">
            <a class="like" @click="addClap()">
              <i class="like red icon"></i> 10 claps
            </a>
          </span>
          <span style="float:right!important;">Proudly <i class="in flag" title="Nationality"></i></span>
        </div>
        <br />
        <div class="ui large image">
          <a href="/#/recipes/non" title="Recipe title">
            <img
              src="https://static5.depositphotos.com/1001001/469/i/600/depositphotos_4690741-stock-photo-chef-cooking-wok.jpg"
              alt="">
          </a>
        </div>
        <br /><br />
        <Comments :comments="_recipeComments" :author_id="author_id" />
      </div>
    </div>
    <div class="event">
      <div class="label">
        <FourWideCircularImage
          imgUrl="https://media.licdn.com/dms/image/D5603AQFBRMLrvq2DQQ/profile-displayphoto-shrink_100_100/0/1671469161332?e=1677110400&v=beta&t=uGB99noG2oNk07sqKb3s_tYLeWikGLhR1D4kl8u0gjE"
          imgTitle="example" />
      </div>
      <div class="content">
        <div class="summary">
          <a href="/#/contributors/test-user">Ivah Becker</a> added a new recipe in <a
            href="/#/search?q=:tags|recipes culinary school">culinary school</a>
          <div class="date">
            4 days ago
          </div>
        </div>
        <div class="meta">
          <span style="float:left!important;">
            <a class="like" @click="addClap()">
              <i class="like red icon"></i> 10 claps
            </a>
          </span>
          <span style="float:right!important;">Proudly <i class="ng flag" title="Nationality"></i></span>
        </div>
        <br />
        <div class="ui large image">
          <a href="/#/recipes/non" title="Recipe title">
            <img src="https://thumbs.dreamstime.com/b/pickled-bamboo-shoots-catfish-sour-spicy-soup-thai-food-pickled-bamboo-shoots-catfish-sour-spicy-soup-thai-159694090.jpg" alt="">
          </a>
        </div>
        <br /><br />
        <Comments :comments="_recipeComments" :author_id="author_id" />
      </div>
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
