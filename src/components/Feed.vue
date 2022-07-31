<template>
    <div class="ui container">
        <Navigation />
        <div class="ui grid">
            <div class="sixteen wide computer column sixteen wide mobile column">
                <div class="ui grid">
                    <div class="two wide computer column sixteen wide mobile hidden column">
                        <LeftSideMenu :active_user="active_user" />
                    </div>
                    <div class="nine wide computer column sixteen wide mobile column">
                        <FeedData />
                    </div>
                    <div class="five wide computer column sixteen wide mobile column">
                        <div class="ui grid">
                            <div class="sixteen wide computer column sixteen wide mobile column">
                                <img
                                    src="https://drdrew.com/wp-content/uploads/2017/08/ad-space-placeholder-300x250-300x250.png" />
                            </div>
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

export default {
    name: "Feed",
    computed: {
        active_user() {
            return this.$store.state.active_user
        }
    },
    data() {
        return { }
    },
    filters: { },
    components: {
        Navigation,
        Follow,
        WhoToFollowList,
        LeftSideMenu,
        FeedData
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}
</style>