// import {router} from '../main'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// URL and endpoint constants
const API_URL = 'http://localhost:3031/'
const LOGIN_URL = API_URL + 'user/create/'
const SIGNUP_URL = 'https://lit-eyrie-53695.herokuapp.com/api/v1/signup'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  signin (context, creds, redirect) {
    // context.$http.post(LOGIN_URL, creds, (data) => {
    //   localStorage.setItem('id_token', data.id_token)
    //   localStorage.setItem('access_token', data.access_token)
    //   this.user.authenticated = true
    //   // Redirect to a specified route
    //   if (redirect) {
    //     router.go(redirect)
    //   }
    // }).error((err) => {
    //   context.error = err
    // })

    context.$http.post(LOGIN_URL, {creds}).then((response) => {
      console.log(response, 'success')
    }, (response) => {
      console.log(response, 'error')
    })
  },

  signup (creds) {
    // console.log(creds.name)
    // Vue.http.post(SIGNUP_URL, creds, (data) => {
    //   console.log(data.body)
    // }).error((err) => {
    //   console.log('error', err)
    // })

    Vue.http.post(SIGNUP_URL, creds).then(response => {
      if (response.body.response.created) {
        // router.go(redirect) redirect to feeds page
        console.log('success')
      }
    }, response => {
      console.log(response.bodyText)
    })
  },

  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
