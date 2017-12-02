<template>
  <div class="ui grid" style="margin:auto">
    <Navigation></Navigation>
    <div class="four wide column centered grid">
      <div class="ui segment">
        <p>popular</p>
      </div>
    </div>
    <div class="four wide column centered grid">
      <div class="ui segment">
        <p>
          <div class="ui feed">
            <div class="event">
              <div class="label">
                <img src="../assets/chef.png">
              </div>
              <div class="content">
                <div class="summary">
                  <a class="user">
                    Elliot Fu
                  </a> added you as a friend
                  <div class="date">
                    1 Hour Ago
                  </div>
                </div>
                <div class="meta">
                  <a class="like">
                    <i class="like icon"></i> 4 Likes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
    <div class="four wide column centered grid">
      right
    </div>
      <!-- <Copyright></Copyright> -->
    </div>
</template>

  <script>
    import Navigation from './Navigation.vue'
    import router from '@/router'
    import store from '@/store'
    import Copyright from './Copyright.vue'
    export default {
      beforeCreate () {
        if (!store.state.isLogged) {
          router.push('/login')
        }
      },
      methods: {
      },
      components: {
        'Navigation': Navigation,
        'Copyright': Copyright
      }
    }
    </script>
