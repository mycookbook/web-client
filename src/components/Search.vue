<template>
  <div>
    <h1 class="subtitle">
      Browse recipes<br>
      It's absolutely free of charge <br
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
  padding: 3px 25px;
}
.subtitle {
  font-size: 60px;
}
</style>
