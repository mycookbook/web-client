<template>
    <div style="background-color:#F4F4F4;border-radius: 8px; width: 100%; height: auto; padding:15px">
        <div>
            <h3>Who to follow</h3>
        </div>
        <br />
        <div>
            <Follow :toFollowList="whoToFollowList" />
        </div>
    </div>
</template>

<script>
import store from '@/store';
import Follow from './Follow.vue';

export default {
    name: "WhoToFollow",
    mounted() {
        store.dispatch('get_who_to_follow');
    },
    computed: {
        whoToFollowList() {
            return this.$store.state.who_to_follow
        }
    },
    components: {
        Follow
    }
};
</script>

<style scoped></style>
