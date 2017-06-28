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
          <div class="ui secondary  menu">
            <div class="right menu">
              <div class="item">
                <div class="ui icon input">
                  <input type="text" placeholder="Search...">
                  <i class="search link icon"></i>
                </div>
              </div>
              <a class="ui item">
                Login
              </a>
            </div>
          </div>
        <!-- end fixed top menu -->
      </div>
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
      name: 'cookbook inc.',
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
