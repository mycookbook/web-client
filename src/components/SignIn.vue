<template>
    <div class="ui grid" style="margin:auto">
      <Navigation></Navigation>
      <div class="four wide column centered grid">
          <h1>Sign in</h1>
          <p>Don't have an account?
            <router-link to="/">Sign Up</router-link>
        </p>
        <template>
          <form class="ui form" v-on:submit.prevent="logIn">
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
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email"
                v-model="credentials.email"
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
        </template>
      </div>
    </div>
  </template>

  <script>
    import Navigation from './Navigation.vue'
    import router from '@/router'
    import store from '@/store'
    export default {
      data () {
        return {
          // We need to initialize the component with any
          // properties that will be used in it
          credentials: {
            email: '',
            password: ''
          },
          info: false,
          error: '',
          dev: 'http://api.dev/api/v1/signin',
          prod: 'https://lit-eyrie-53695.herokuapp.com/api/v1/signin',
          errors: ['one', 'two']
        }
      },
      beforeCreate () {
        if (!store.state.isLogged) {
          router.push('/signin')
        }
      },
      methods: {
        logIn: function (e) {
          this.$http.post(this.prod, {
            email: this.credentials.email,
            password: this.credentials.password
          }).then((response) => {
            var jwtDecode = require('jwt-decode')
            var decoded = jwtDecode(response.body.token)
            console.log(decoded)
            localStorage.setItem('token', response.body.token)
            store.commit('LOGIN_USER')
            router.push('/feeds')
          }, (response) => {
            this.info = true
            this.errors = JSON.parse(response.bodyText)
          })
        }
      },
      components: {
        'Navigation': Navigation
      }
    }
    </script>
