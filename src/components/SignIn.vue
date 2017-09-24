<template>
    <div class="ui grid" style="margin:auto">
      <Navigation></Navigation>
      <div class="four wide column centered grid">
          <h1>Log in to your account</h1>
          <p>Don't have an account?
            <router-link to="/">Sign Up</router-link>
        </p>
        <form class="ui form">
          <div class="field">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your username"
              v-model="credentials.username"
            >
          </div>
          <div class="field">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter your password"
              v-model="credentials.password"
            >
          </div>
          <!-- <button class="ui button" type="submit">Submit</button> -->
          <div class="item">
            <button class="ui primary button" @click="logIn">Log In</button>
          </div>
        </form>
      </div>
    </div>
  </template>

  <script>
    import Navigation from './Navigation.vue'
    // import auth from '../auth'
    const API_URL = 'http://localhost:3031/'
    const LOGIN_URL = API_URL + 'user/create/'
    export default {
      data () {
        return {
          // We need to initialize the component with any
          // properties that will be used in it
          credentials: {
            username: '',
            password: ''
          },
          error: ''
        }
      },
      methods: {
        logIn: function (e) {
          e.preventDefault()
          var credentials = {
            username: this.credentials.username,
            password: this.credentials.password
          }

          // We need to pass the component's this context
          // to properly make use of http in the auth service
          // auth.login(this, credentials, 'secretquote')

          this.$http.post(LOGIN_URL, {credentials}).then((response) => {
            console.log(response, 'success')
          }, (response) => {
            console.log(response, 'error')
          })
        }
      },
      components: {
        'Navigation': Navigation
      }
    }
    </script>
