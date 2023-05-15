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
      toFollowList: [{
        followers: '1M',
        author: "Presh Amit",
        avatar: "https://st4.depositphotos.com/1017986/25404/i/600/depositphotos_254046280-stock-photo-happy-male-indian-chef-in.jpg",
        handle: "test-user",
      },
      {
        followers: '67K',
        author: "Ivah Becker",
        avatar: "https://st4.depositphotos.com/1017986/25404/i/600/depositphotos_254046280-stock-photo-happy-male-indian-chef-in.jpg",
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
