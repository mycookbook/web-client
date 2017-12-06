<template>
  <div>
      <img
        v-bind:src="imgUrl"
      />
      <div class="segments">
        <div class="descr">
          {{ descr }}
          <span class="flag">
            <i :class="flag"></i>
          </span>
        </div><br>
        <div class="title">
          {{ name }}
        </div>
        <br>
        <b class="recipes">{{ recipes }}</b> Recipes
      </div>

  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    recipes: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      default: 'SHORT DESCIPTION'
    },
    flag: {
      type: String,
      required: false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.segments {
  padding-left: 15px;
}
.segments .title {
  font-weight: 900;
  font-size: 20px;
  margin: -15px;
  margin-left: -1px;
}
.segments .descr {
  font-size: 12px;
  letter-spacing: 0.15em;
}
.recipes {
  letter-spacing: 0.2em;
}
.flag {
  float: right;
  margin-right:10px;
}
</style>
