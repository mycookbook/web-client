<template>
  <div class="ui container">
    <Navigation />
    <div v-if="isLoading">
      <RecipeCardSkeleton />
    </div>
    <div v-else>
      <br /><br /><br />
      <Breadcrumb :active="dashboard" />
      <div class="thirteen wide computer column sixteen wide mobile column">
        <div class="ui grid">
          <div class="six wide computer column sixteen wide mobile column">
            <img class="ui fluid image" :src="contributor.avatar">
          </div>
          <div class="ten wide computer column sixteen wide mobile column">

            <div style="margin-top:8%;margin-bottom:8%;"></div>
            <div>
              <h2>About this contributor</h2>
            </div>
            <div style="margin-top:3%;"></div>
            <div class="tvn horizontal stroke"></div>

            <div style="margin-top:3%;"></div>

            <div style="margin-top:15px;">
              <b>{{ contributor.name }}</b> ({{ contributor.pronouns }})
            </div>
            <div>
              <div>
                Cookbooks
                <a :href="'#/search?q=:cookbooks|author ' + contributor.name">{{ contributor.contributions.cookbooks
                }}</a>
              </div>
              <div>
                Recipes <a :href="'#/search?q=:recipes|author ' + contributor.name">{{ contributor.contributions.recipes
                }}</a>
              </div>
            </div>
            <div>Member since: {{ contributor.created_at }}</div>
            <br />
            <div class="ui tbb tiny button">
              <i class="ui cart icon"></i> view my pantry
            </div>
            <div style="margin-top:3%;"></div>
            <div>{{ contributor.about }}</div>
            <div style="margin-top:8%;margin-bottom:8%;"></div>
          </div>
        </div>
      </div>
      <div class="sixteen wide computer column sixteen wide mobile column">
        <div class="ui grid">
          <div class="sixteen wide column">
            <div class="ui form">
              <div class="field">
                <label>*Send a message/Give Feedback/Ask me a question:</label>
                <textarea :placeholder="personalizedMsg()"></textarea>
              </div>
              <div class="field">
                <label>*Your name:</label>
                <input type="text" />
              </div>
              <div class="field">
                <label>*Your phone:</label>
                <input type="text" />
              </div>
              <div class="field">
                <label>*We sent you a verification code</label>
                <input type="text" style="width: 35%;" />
              </div>
            </div>
            <br />
            <div class="ui small disabled button tbb">
              Submit
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Bottom />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import RecipeCardSkeleton from './Skeletons/RecipeCardSkeleton.vue';
import Breadcrumb from './Breadcrumb.vue';

export default {
  name: "ContributorProfile",
  mounted() {
    this.$store.dispatch('fetch_contributor', this.$route.params.username)
  },
  computed: {
    contributor() {
      return this.$store.state.contributor
    },
    isLoading() {
      return this.$store.state.resource_isLoading
    }
  },
  data() {
    return {
      dashboard: 'My Dashboard'
    }
  },
  methods: {
    getMapAddr: function ($q) {
      return ' http://maps.google.com/?q=' + $q
    },
    personalizedMsg() {
      return "This ia a personalised message/question, it goes directly into " + this.contributor.name + "'s" + " email, so, make it count!";
    }
  },
  components: {
    RecipeCardSkeleton,
    Navigation,
    Breadcrumb,
    Contact,
    Bottom
  }
};
</script>

<style scoped>
.container {
  margin-top: 23vh;
}

.contact-labels span {
  padding: 8px;
  font-weight: 500 !important;
}

.contact-labels span a {
  color: #171717 !important;
}
</style>
