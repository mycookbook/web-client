<template>
  <div class="four wide column">
    <img class="ui mini circular image" :src="imgUrl" :title="imgTitle" style="height:31px!important;">
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    imgTitle: String
  }
}
</script>
