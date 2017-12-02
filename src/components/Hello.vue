<template>
  <div>
    <HelloNav></HelloNav>
    <div class="ui margin">
      <h1>
        <div class="intro-header">
          Cookbook inc.
        </div>
        <div class="intro-sub">
          Have access to millions of Recipes all in one place absolutely Free
        </div>
        <input-tag
          :tags="tagsArray"
          :placeholder="placeholderText"
          >
        </input-tag>
      </h1>
    </div>

    <div class="ui massive fluid action input top">
      <input type="text" placeholder="Try  “Flat belly water recipe”">
      <div class="ui basic blue button">Search</div>
    </div>

    <div class="top"></div>

    <div class="ui mini buttons">
        <a href="" class="ui facebook button">
          <i class="facebook icon"></i> Log in with Facebook
        </a>
        <a href="" class="ui twitter button">
          <i class="twitter icon"></i> Twitter
        </a>
        <div class="or"></div>
        <a href="" class="ui google plus button">
          <i class="google plus icon"></i> Google
        </a>
    </div>
    <small><p>Join the family of cookbook users</p></small>
    <div v-for="cookbook, recipes in cookbooks">
      <h2 style="text-transform:capitalize">
        {{cookbook.name}}
      </h2>
      <div class='ui grid'>
        <div v-for="recipe in cookbook.recipes" class="top container">
            {{recipe.name}}
            <div class="ui labeled button" tabindex="0">
              <div class="ui red button">
                <i class="food icon"></i> Recipes
              </div>
              <a class="ui basic red left pointing label">
                1,048
              </a>
            </div>
            <div class="ui labeled button" tabindex="0">
              <div class="ui basic blue button">
                <i class="fork icon"></i> Users
              </div>
              <a class="ui basic left pointing blue label">
                1,048
              </a>
            </div>
            <div class="image-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDN4vpCXA4Bc0HXzoN7bbxrt41AS78ZI1eApyTj-LGSZ46nCV" class="ui large image">
            </div>
        </div>
    </div>
      <br><br><br><br>
    </div>
  </div>
</template>

<script>
import HelloNav from './HelloNav.vue'
import InputTag from 'vue-input-tag'

export default {
  data () {
    return {
      cookbooks: {},
      tagsArray: [],
      placeholderText: 'e.g pepper'
    }
  },
  components: {
    'HelloNav': HelloNav,
    'InputTag': InputTag
  },
  methods: {
    getApiServerUrl: function () {
      let prod = 'https://lit-eyrie-53695.herokuapp.com/api/v1/auth/signin'
      let dev = 'http://cookbook-api.dev/api/v1/cookbooks'
      return (process.env.NODE_ENV === 'production') ? prod : dev
    }
  },
  mounted () {
    this.$http.get(this.getApiServerUrl(), {
    }).then((response) => {
      this.cookbooks = JSON.parse(response.bodyText).data.data
      console.log(this.cookbooks)
    }, (response) => {
      console.log('error', response)
    })
  }
}
</script>

<style>
  .top {
    margin-top: 4%;
  }
  .top.container {
    width: 25%;
  }
  .margin {
    margin-top: 25%;
  }
  .intro-header {
    color: #334F8D !important;
    font-size: 3.5rem;
    padding-bottom: 25px;
    font-weight: 600;
  }
  .intro-sub {
    color: #484848;
    font-size: 3.3rem;
    line-height: 1.2857em;
    font-weight: 400;
  }
  .vue-input-tag-wrapper .input-tag {
    background-color: #0F73A2!important;
    border: 1px solid #0F73A2!important;
    color: white!important;
    padding:10px!important
  }
  .vue-input-tag-wrapper .input-tag .remove {
    color: white!important
  }
</style>
