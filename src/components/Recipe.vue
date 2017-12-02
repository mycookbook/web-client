<template>
  <div>
    <div class="img-container">
      <img
        v-bind:src="imgUrl"
        class="ui medium image"
      />
      <div class="segments">
        <div class="title">
          {{ name }}
        </div>
      </div>
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
.segments {
  padding-left: 15px;
}
.segments .title {
  font-weight: 900;
  font-size: 18px;
  margin-top: 0px;
  margin-left: -1px;
}
</style>
