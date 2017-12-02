<template>
  <div>
    <div>
      <img src="../assets/img/jollof-rice.jpg" class="ui medium image">
    </div>
    <div>
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
