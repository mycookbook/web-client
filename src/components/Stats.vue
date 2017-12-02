<template>
  <div class="sta">
    <div class="ui statistic">
      <div class="value">
        <h5></h5>
      </div>
      <div class="label">
      </div>
    </div>
    <div class="ui mini statistic">
      <div class="value">
        {{ users }}
      </div>
      <div class="label">
        users
      </div>
    </div>
    <div class="ui mini statistic">
      <div class="value">
        {{ recipes }}
      </div>
      <div class="label">
        recipes
      </div>
    </div>
    <div class="ui mini statistic">
      <div class="value">
        {{ cookbooks }}
      </div>
      <div class="label">
        cookbooks
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      users: 0,
      recipes: 0,
      cookbooks: 0,
      prod: 'https://lit-eyrie-53695.herokuapp.com/api/v1/stats',
      dev: 'http://cookbook-api.dev/api/v1/stats'
    }
  },
  mounted () {
    this.$http.get(this.getApiServerUrl(), {
    }).then((response) => {
      this.users = JSON.parse(response.bodyText).users
      this.recipes = JSON.parse(response.bodyText).recipes
      this.cookbooks = JSON.parse(response.bodyText).cookbooks
    }, (response) => {
      console.log('error')
    })
  },
  methods: {
    getApiServerUrl: function () {
      return (process.env.NODE_ENV === 'production') ? this.prod : this.dev
    }
  }
}
</script>
<style>
.sta {
  padding-top: 24px;
}
</style>
