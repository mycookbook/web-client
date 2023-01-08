<template>
  <div style="background-color:#F4F4F4;border-radius: 8px; width: 100%; height: auto; padding:15px">
    <div>
      <h3>Who to follow</h3>
    </div>
    <br />
    <div>
      <Follow :toFollowList="toFollowList" />
    </div>
  </div>
</template>

<script>
import Follow from './Follow.vue';

export default {
  name: "Example",
  data() {
    return {
      toFollowList: [
        {
          followers: '67K',
          author: "Ivah Becker",
          avatar: "https://media.licdn.com/dms/image/D5603AQFBRMLrvq2DQQ/profile-displayphoto-shrink_100_100/0/1671469161332?e=1677110400&v=beta&t=uGB99noG2oNk07sqKb3s_tYLeWikGLhR1D4kl8u0gjE",
          handle: "mummy-obiora",
        },
        {
          followers: '10K',
          author: "Eulah Durgan",
          avatar: "https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg",
          handle: "edmond-olson",
        }
      ]
    }
  },
  components: {
    Follow
  }
};
</script>

<style scoped>
.example-class {
  color: #000000;
}
</style>
