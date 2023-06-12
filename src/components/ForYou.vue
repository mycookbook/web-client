<template>
    <div style="margin-top:25px;">
        {{ dt }}
        <TrendingThisWeek />
        <br />
        <div class="ui divider"></div>
        <br />
        <Feedback />
        <br />
        <div class="ui divider"></div>
        <br /><br />
        <TakingOrders />
        <br /><br />
        <TrendingNow />
        <br />
        <div class="ui divider"></div>
        <br /><br />
        <PeopleWithSimilarInterests />
        <div>
            <a href="/">back to top</a>
        </div>
    </div>
</template>
    
<script>
import Navigation from './Navigation.vue';
import TrendingThisWeek from './TrendingThisWeek.vue'
import Feedback from './Feedback.vue'
import TrendingNow from './TrendingNow.vue'
import TakingOrders from './TakingOrders.vue'
import PeopleWithSimilarInterests from './PeopleWithSimilarInterests.vue'

export default {
    name: "ForYou",
    computed: {
        dt() {
            return process.env.DEV_TOKEN
        }
    },
    components: {
        TrendingThisWeek,
        Feedback,
        TrendingNow,
        TakingOrders,
        PeopleWithSimilarInterests
    }
};
</script>