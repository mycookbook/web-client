<template>
  <div>
    <div>
      <img src="../assets/img/ketogenic.jpg" class="ui medium image">
    </div>
    <div>
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
