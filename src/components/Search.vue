<template>
  <div class="search-banner">
    <h3 class="ui huge header">
      <div class="ui sub header">
        Browse recipes<br>
        It's absolutely free of charge
      </div>
    </h3>
    <div>
      <AutoComplete />
    </div>
    <div class="note">
      <small>
          Couldn't find the recipe you are looking for?
          <a href="/#/">
            &nbsp; Create it
          </a>
      </small>
    </div>
  </div>
</template>

<script>
import AutoComplete from './AutoComplete.vue'

export default {
  data () {
    return {}
  },
  components: {
    AutoComplete: AutoComplete
  }
}
</script>

<style>
.search-banner {
  margin: 15% 0 0 0;
}
.note {
  padding-left: 12px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
