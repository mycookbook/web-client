<template>
  <div class="ui massive search" style="margin:auto;width:83%;">
    <div class="ui icon large fluid input top">
      <input class="prompt" type="text" placeholder="Try &quot;Flat tummy water recipe&quot; ">
      <i class="search icon sicon"></i>
    </div>
    <div class="results"></div>
    <Explorer />
</div>
</template>

<script>
import Explorer from './Explorer.vue'

export default {
  data () {
    return {}
  },
  components: {
    Explorer
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ffffff!important;
}
</style>
