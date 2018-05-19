<template>
  <div class="search-banner">
    <h1 class="subtitle">
      Find recipes<br>
      Join the Community
    </h1>
    <div>
      <AutoComplete />
    </div>
    <div class="note">
      <small>
        <b>
          Couldn't find the recipe you are looking for?
          <a href="/#/">
            &nbsp; Create it
          </a>
        </b>
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
.note {
  padding: 3px 9px;
  letter-spacing: 0.03rem;
  font-weight: 100;
  font-size: 0.8rem;
}
.subtitle {
  font-size: 60px;
}
.search-banner {
  margin: 9% 0 0 0;
}
</style>
