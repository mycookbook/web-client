<template>
  <div class="hello">
    <Navigation></Navigation>
      <!-- content -->
    <div class="ui grid" style="margin:auto">

      <div class="eight wide column">
        <img src="../assets/bg.jpg" class="ui image middle aligned" style="left:20%; marginTop: 4%;"/>
      </div>

      <div class="four wide column centered grid">
        <p>
          <h1>Create a new account</h1>
          <p>It's absolutely free and always will be.</p>
        </p>
        <template>
          <form class="ui form" v-on:submit.prevent="signUp">
            <div class="ui negative message" v-if="info">
              <div class="header">
                There were some errors with your submission
              </div>
              <p>
                <ul class="list">
                  <li v-for="error in errors">
                    {{error}}
                  </li>
                </ul>
              </p>
            </div>
            <div class="field">
              <label>First Name</label>
              <input v-model="firstName" placeholder="First Name" required>
            </div>
            <div class="field">
              <label>Last Name</label>
              <input v-model="lastName" placeholder="Last Name" required>
            </div>
            <div class="field">
              <label>email</label>
              <input v-model.trim="email" placeholder="Email address" required>
            </div>
            <div class="field">
              <label>Password</label>
              <input type="password" v-model.trim="password" placeholder="Pasword" required>
            </div>
            <section class="bottom aligned">
              <span>
                <small>
                  Already have an account? <router-link to="/signin">Sign in</router-link>
                </small>
              </span>
            </section>
            <br>
            <div class="two column row">
              <div class="column">
                <small>
                  By clicking <b>Create Account</b>, you agree to our <a v-bind:href="tnc" @click="seeTnc">Terms</a>
                  and <a v-bind:href="drp">Data Retention Policy</a>. You may receive SMS message notifications from
                  Cookbook and can opt out at any time.
                </small>
              </div>
              <br><br>
            </div>
            <!-- <button class="ui button" type="submit">Submit</button> -->
            <div class="item">
              <button class="ui primary button">
                Create Account
              </button>
            </div>
          </form>
        </template>
        <br><br>

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
// import auth from '../auth'
import Navigation from './Navigation.vue'
export default {
  data () {
    return {
      content: '',
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      tnc: 'terms',
      'drp': 'data-rentention-policy',
      links: ['About', 'User Stories', 'Find Cookbooks', 'Terms & Conditions', 'Data Retention Policy', 'API'],
      info: false,
      errors: [],
      prod: 'https://lit-eyrie-53695.herokuapp.com/api/v1/signup',
      dev: 'http://api.dev/api/v1/signup'
    }
  },
  methods: {
    signUp: function (e) {
      this.$http.post(this.dev, {
        name: this.firstName + ' ' + this.lastName,
        email: this.email,
        password: this.password
      }).then((response) => {
        this.$router.push('/signin')
      }, (response) => {
        this.info = true
        this.errors = JSON.parse(response.bodyText)
      })
    },
    search: function () {
      return alert('searching')
    },
    seeTnc: function () {
      return alert(this.tnc)
    }
  },
  components: {
    'Navigation': Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  padding: 10px;
}
</style>
