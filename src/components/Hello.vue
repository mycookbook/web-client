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
        <form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input v-model="firstName" placeholder="First Name">
          </div>
          <div class="field">
            <label>Last Name</label>
            <input v-model="lastName" placeholder="Last Name">
          </div>
          <div class="field">
            <label>email</label>
            <input v-model="email" placeholder="Mobile number or email address">
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="New pasword">
          </div>

          <div class="two column row">
            <div class="column">
              <small>
                By clicking Create Account, you agree to our <a v-bind:href="tnc" @click="seeTnc">Terms</a>
                and <a v-bind:href="drp">Data Retention Policy</a>. You may receive SMS message notifications from
                Cookbook and can opt out at any time.
              </small>
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
        <br><br><br><br>
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
import auth from '../auth'
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
      'drp': 'data-rententin-policy',
      links: ['About', 'User Stories', 'Find Cookbooks', 'Terms & Conditions', 'Data Retention Policy', 'API']
    }
  },
  methods: {
    signUp: function (e) {
      e.preventDefault()
      var credentials = {
        name: this.firstName + ' ' + this.lastName,
        email: this.email,
        password: this.password
      }

      // We need to pass the component's this context
      // to properly make use of http in the auth service
      auth.signup(credentials)
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
