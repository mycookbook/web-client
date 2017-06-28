<template>
  <div class="hello">
    <div class="tvn page">

      <!-- fixed menu -->
      <div class="ui top fixed menu grid">
        <div class="eight wide mobile four wide tablet six wide computer left floated column tvn no padding">
            <!-- brand -->
            <div class="tvn fade clipped brand">
              <img class="logo" src="../assets/logo.png">
              <h1 class="name ui large header">{{ name }}</h1>
            </div>
            <!-- end brand -->
          </div>
          <h3>
            <a href="/login">LOGIN</a>
          </h3>
        </div>
        <!-- end fixed top menu -->
      </div>
      <!-- content -->
    <p>
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Cookbook Inc.',
      content: 'content here'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #00688B;
}
</style>
