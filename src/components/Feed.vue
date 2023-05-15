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
            <div class="ui centered header">
              <a class="following" href="/#/">Following</a>
              <a class="" style="padding-right:30px;"></a>
              <a  class="" href="/#/foryou" style="color:black!important;">For You</a>
            </div>
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
.following {
  color: black;
  padding-bottom: 10px; 
  border-bottom: solid #0160CC 1px;
}
</style>
