<template>
  <div class="ui container">
    <Navigation />
    <div class="ui grid">
      <div class="sixteen wide computer column sixteen wide mobile column">
        <div class="ui grid">
          <div class="three wide computer column sixteen wide mobile hidden column">
            <LeftSideMenu />
          </div>
          <div class="eight wide computer column sixteen wide mobile column">
            <a class="ui label">
                <em>Control what you see by <a
                  href="/#/dashboard?tab=Preferences">choosing </a>your preffered topics</em>
              </a>
              <br /><br />
            <FeedData />
          </div>
          <div class="five wide computer column sixteen wide mobile column">
            <div class="ui grid">
              <ThreehundredByTwofifty />
            </div>
            <div class="ui grid">
              <div class="sixteen wide computer column sixteen wide mobile column">
                <WhoToFollowList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Follow from './Follow.vue';
import WhoToFollowList from './WhoToFollowList.vue';
import LeftSideMenu from './LeftSideMenu.vue';
import FeedData from './FeedData.vue';
import ThreehundredByTwofifty from './Ads/300X250.vue'

export default {
  name: "Feed",
  components: {
    Navigation,
    Follow,
    WhoToFollowList,
    LeftSideMenu,
    FeedData,
    ThreehundredByTwofifty
  }
};
</script>

<style scoped>
.container {
  margin-top: 23vh;
}
</style>
