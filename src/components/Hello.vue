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
          <div class="ui secondary menu">
            <div class="right menu">
              <div class="item">
                <div class="ui icon input">
                  <input type="text" placeholder="search cookbooks..." @keyup.enter="search">
                  <i class="search link icon"></i>
                </div>
              </div>
              <div class="item">
                <div class="ui button" @click="signIn">
                  Sign in
                </div>
              </div>
            </div>
          </div>
        <!-- end fixed top menu -->
      </div>
    </div>

      <!-- content -->

    <div class="ui grid" style="margin:auto">

      <div class="eight wide column">
        <img src="../assets/bg.jpg" class="ui image middle aligned" style="left:20%; marginTop: 4%;"/>
      </div>

      <div class="four wide column centered grid">
        <p>
          <h1>Create a new account</h1>
          <p>It's free and always will be.</p>
        </p>
        <form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name">
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name">
          </div>
          <div class="field">
            <label>email</label>
            <input type="text" name="email" placeholder="Mobile number or email address">
          </div>
          <div class="field">
            <label>Password</label>
            <input type="text" name="password" placeholder="New pasword">
          </div>

          <div class="two column row">
            <div class="column">
              <small>By clicking Create Account, you agree to our <a v-bind:href="tnc" @click="seeTnc">Terms and Agreements</a>.
              You may receive SMS message notifications from Cookbook and can opt out at any time.</small>
            </div>
            <br><br>
          </div>
          <!-- <button class="ui button" type="submit">Submit</button> -->
          <div class="item">
            <button class="ui primary button" @click="signUp">
              Create Account
            </button>
          </div>
        </form>
        <br><br><br><br><br><br><br><br><br><br>
        <section class="bottom aligned">
          <span v-for="link in links">
            <a v-bind:href="content"> {{ link }} </a>
          </span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Cookbook inc.',
      content: '',
      tnc: 'This is our terms and agreements',
      links: ['Find Cookbooks', 'Sign in', 'Sign Up', 'Terms & Conditions', 'API']
    }
  },
  methods: {
    // a computed getter
    signIn: function () {
      return alert('signing in')
    },
    signUp: function () {
      return alert('signing up')
    },
    search: function () {
      return alert('searching')
    },
    seeTnc: function () {
      return alert(this.tnc)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  padding: 10px;
}
</style>
