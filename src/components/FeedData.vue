<template>
  <div class="ui feed">
    <div class="event">
      <div class="label">
        <FourWideCircularImage imgUrl="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg"
          imgTitle="example" />
      </div>
      <div class="content">
        <div class="summary">
          <a>Eulah Durgan</a> added a new recipe in <a href="/#/search?q=:tags|recipes vegan">vegan</a>
          <div class="date">
            2 mins ago
          </div>
        </div>
        <div class="meta">
          <a class="like">
            <i class="like red icon"></i> 10 claps
          </a>
        </div>
        <br />
        <div class="ui large image">
          <a>
            <img
              src="https://i0.wp.com/eatbinchi.com/wp-content/uploads/2022/06/Why-Binchi-Image.png?resize=1320%2C1320&ssl=1">
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
          <a>Ivah Becker</a> added a new recipe in <a href="/#/search?q=:tags|recipes culinary school">culinary school</a>
          <div class="date">
            4 days ago
          </div>
        </div>
        <div class="meta">
          <a class="like">
            <i class="like red icon"></i> 10 claps
          </a>
        </div>
        <br />
        <div class="ui large image">
          <a>
            <img
              src="https://i0.wp.com/eatbinchi.com/wp-content/uploads/2022/11/Asun.png">
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
  }
};
</script>

<style scoped>

</style>
