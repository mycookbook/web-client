<template>
  <div class="sign-up-container">
    <footer>
    <div class="ui grid">
      <div class="eight wide column">
          <img
          class="logo"
          src="/static/signup-img.png"
          alt="enter your email address to be the first to get notified of about new recipes"
          style="min-width:unset;height:8.5em; !important"
          >
      </div>
      <div class="eight wide column" style="position:relative!important;">
        <div class="ui action input" style="position:absolute;bottom:35%;right:0;">
          <input type="text" placeholder="Your email address">
          <button class="ui button tbb" style="padding:20px;padding-right:40px;">Get started now</button>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
.sign-up-container {
  /* border-top: 1px solid #cccccc!important; */
  margin-top: 3%;
  width: 100%;
}
</style>
