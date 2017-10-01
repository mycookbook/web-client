<template>
  <div class="hello">
    <Navigation></Navigation>
      <!-- content -->
    <div class="ui grid" style="margin:auto">

      <div class="seven wide column centered grid">
        <!-- <img src="../assets/1.jpg" class="ui image middle aligned" style="left:20%; marginTop: 4%;"/> -->
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :width="500" :height="500">
          <slide :index="0">
            <figure>
              <img src="../assets/efo-riro-1.png"/>
              <figcaption>
                <h3>Efo Riro Recipe</h3>
                A very popular Yoruba soup in Nigeria, a widely loved Nigerian soup because of its health benefits.
                The name 'efo' means vegetables, hence it is a Yoruba rich vegetable soup/stew.
              </figcaption>
            </figure>
          </slide>
          <slide :index="1">
            <figure>
              <img src="../assets/ofada-stew.jpg"/>
              <figcaption>
                <h3>Prepare Plain Ofada Rice Sauce "Obe Ata Iru"</h3>
                Join this online community of cookbook users, learn and collaborate with recipe submissions you love.
                Learn how to make this ketogenic delight with pictures and step by step how-tos
              </figcaption>
            </figure>
          </slide>
          <slide :index="2">
            <figure>
              <img src="../assets/egusi-soup.jpg"/>
              <figcaption>
                <h3>Prepare Egusi Soup</h3>
                Learn how to make this ketogenic delight with pictures and step by step how-tos
              </figcaption>
            </figure>
          </slide>
          <slide :index="3">
            <figure>
              <img src="../assets/minced-meatballs-with-tomato-sauce.jpg"/>
              <figcaption>
                <h3>Prepare Capsicum tomato sauce with meatballs</h3>
                Learn How to prepare Capsicum tomato sauce with meatballs
              </figcaption>
            </figure>
          </slide>
          <slide :index="4">
            <figure>
              <img src="../assets/ketogenic-flat-tummy-water.jpg"/>
              <figcaption>
                <h3>Ketogenic - Flat Tummy Water</h3>
                Learn How to prepare your own flat tummy water from submissions of
                other cookbook users in the ketogenic cookbook. Make your own submissions too
              </figcaption>
            </figure>
          </slide>
        </carousel-3d>
      </div>

      <div class="five wide column centered grid" :class="{'is-waiting': loader}">
        <p>
          <h1>Create a new account</h1>
          <p>Avail yourself an unlimited access to millions of recipes from around the world It's absolutely free and always will be.</p>
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
                  By clicking <b>Submit</b>, you agree to our <a v-bind:href="tnc" @click="seeTnc">Terms</a>
                  and <a v-bind:href="drp">Data Retention Policy</a>. You may receive SMS message notifications from
                  Cookbook and can opt out at any time.
                </small>
              </div>
              <br><br>
            </div>
            <!-- <button class="ui button" type="submit">Submit</button> -->
            <div class="item">
              <button class="ui primary button">
                Submit
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
import router from '@/router'
import store from '@/store'
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  beforeCreate () {
    if (store.state.isLogged) {
      router.push('/feeds')
    }
  },
  data () {
    return {
      loader: false,
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
      errors: []
    }
  },
  methods: {
    signUp: function (e) {
      this.loader = true
      this.$http.post(this.getApiServerUrl(), {
        name: this.firstName + ' ' + this.lastName,
        email: this.email,
        password: this.password
      }).then((response) => {
        this.$router.push('/signin')
      }, (response) => {
        this.info = true
        this.loader = false
        this.errors = JSON.parse(response.bodyText)
      })
    },
    getApiServerUrl: function () {
      let prod = 'https://lit-eyrie-53695.herokuapp.com/api/v1/signup'
      let dev = 'http://api.dev/api/v1/signup'
      return (process.env.NODE_ENV === 'production') ? prod : dev
    },
    seeTnc: function () {
      return alert(this.tnc)
    }
  },
  components: {
    'Navigation': Navigation,
    Carousel3d,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
span {
  padding: 10px;
}
.carousel-3d-container {
  width: 100%;
  margin: 10%;
}
.carousel-3d-slide img {
  width: 190%;
}
.carousel-3d-container figure {
  margin:0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.is-waiting {
    position: relative;
    transition-duration: .3s;
    > * {
        opacity: .25;
    }
    &:before {
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 9;
    }
    &:after {
        background: {
            image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0cHgiIGhlaWdodD0iMTA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNDE2NjY2NjY2NjY2NjY2N3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48L3N2Zz4=);
            position: center;
            size: cover;
        }
        content: '';
        height: 64px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
    }
}
</style>
