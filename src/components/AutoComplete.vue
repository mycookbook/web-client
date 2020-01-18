<template>
  <div class="ui massive search" style="margin:auto;width:83%;">
    <div class="ui icon large fluid input top">
      <input
        class="prompt"
        type="text"
        placeholder="Try &quot;Flat tummy water recipe&quot;"
        @keyup.prevent="search"
        v-model="query"
      />
      <i class="search icon sicon"></i>
    </div>
    <div class="results"></div>
  </div>
</template>

<script>
import Explorer from './Explorer.vue'

export default {
  data () {
    return {
      query: ''
    }
  },
  props: {
    filters: Array
  },
  methods: {
    search() {
      // this.axios.get('http://localhost:5000/search?q='+this.query)
      // .then(response => {
      //   this.data = response.data;
      // })

      this.$http.get('http://localhost:8080/search?q='+this.query, {})
      .then((response) => {
        this.data = response.data;
      }, (response) => {
        console.log('herror', response)
        if (response.status === 0) {
          this.errors = ['Server Error.']
        } else {
          this.errors = JSON.parse(response.bodyText)
        }
      })
    }
  }
}
</script>

<style>
.sicon {
  float: left;
  color: #0160CC!important;
  font-weight: 100!important;
  margin-right: 12px !important;
}
.prompt {
  font-weight: 300!important;
  line-height: 200%!important;
  padding-left:40px!important;
  border-radius: 0!important;
  border-top: none!important;
  border-left: none!important;
  border-right: none!important;
  /* box-shadow: 0 80px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  background-color: #ffffff!important;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
</style>
