<template>
  <div>
    <h1 class="subtitle">
      Browse recipes<br>
      It's absolutely free of charge
    </h1>
    <div>
      <Autocomplete />
    </div>
    <div class="note">
      <small>You know a recipe but couldn't find it?
        <a href="/#/">&nbsp; Create it</a>
      </small>
    </div>
  </div>
</template>

<script>
import Autocomplete from './Autocomplete.vue'

export default {
  data () {
    return {}
  },
  components: {
    Autocomplete: Autocomplete
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
