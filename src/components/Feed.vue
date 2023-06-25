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
                        <div class="ui header" @click="toggleTab()">
                            <a class="black-text active" href="/#/?v=fu" id="foryou">
                                For You <a class="ui red circular basic tiny label"
                                    style="padding:7px 8px!important;">Beta</a>
                            </a>
                            <a class="" style="padding-right:30px;"></a>
                            <a class="black-text" href="/#/?v=ff" id="following">
                                Following
                            </a>
                        </div>
                        <div style="color:white!important;" id="currTab">{{ currentTab }}</div>
                        <div v-if="currentTab === 'fu' || currentTab === undefined">
                            <ForYou />
                        </div>
                        <div v-else>
                            <Following />
                        </div>
                    </div>
                    <div class="five wide computer column sixteen wide mobile column">
                        <div class="ui grid">
                            <div class="sixteen wide computer column sixteen wide mobile column">
                                <WhoToFollowList />
                            </div>
                        </div>
                        <div class="ui grid mobile hidden">
                            <ThreehundredByTwofifty />
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
import Following from './Following.vue';
import ForYou from './ForYou.vue';
import ThreehundredByTwofifty from './Ads/300X250.vue'

export default {
    name: "Feed",
    computed: {
        currentTab() {
            return this.$route.query.v
        }
    },
    data() {
        return {
            selected: this.$route.query.v
        };
    },
    components: {
        Navigation,
        Follow,
        WhoToFollowList,
        LeftSideMenu,
        Following,
        ForYou,
        ThreehundredByTwofifty
    },
    methods: {
        toggleTab() {
            let t = $("#currTab").text().trim()

            if (t === 'ff') {
                $("#following").removeClass("active")
                $("#foryou").addClass("active")
            }

            if (t === 'fu' || t == "") {
                $("#foryou").removeClass("active")
                $("#following").addClass("active")
            }
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}

.active {
    padding: 20px 10px;
    border-bottom: solid #0160CC 1px;
}

.black-text {
    color: black !important;
}
</style>
