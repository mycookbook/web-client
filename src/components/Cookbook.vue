<template>
  <div>
    <div class="img-container">
      <img src="../assets/img/ketogenic.jpg" class="ui medium image">
      {{ name }} <br>
      {{ recipes }} + recipes
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
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.img-container img {
  /*opacity: 0.5;*/
  padding:10px;
}
</style>
