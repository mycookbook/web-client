<template>
  <div>
    <img
      v-bind:src="imgUrl"
    />
    <div class="title segments">
      {{ name }}
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
.title {
  font-weight: 900;
  margin-top: 0px;
  margin-left: -1px;
}
</style>
