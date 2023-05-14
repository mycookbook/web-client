<template>
    <div class="ui container">
        <Navigation />
        <div class="margin-top-150"></div>
        <div class="ui grid">
            <div class="three wide computer column sixteen wide tablet column mobile hidden">
                <div class="ui vertical menu">
                    <a class="item" href="/#/help?doc=query-syntax">
                        <h4 class="ui header">Search Query Syntax</h4>
                        <small>Learn how to get fine-grained results using our homegrown query syntax</small>
                    </a>
                    <a class="item" href="/#/help?doc=contributing">
                        <h4 class="ui header">Contributing</h4>
                        <small>Check out our resources on how to be a contributor</small>
                    </a>
                    <a class="item" href="/#/help?doc=templates">
                        <h4 class="ui header">Templates</h4>
                        <small>
                            Choose from a list of various templates to jump start your new recipe creation
                        </small>
                    </a>
                </div>
            </div>
            <div class="sixteen wide mobile only">
                <div class="ui three item menu" style="margin-left:15px!important;">
                    <a class="item" href="/#/help?doc=query-syntax">
                        <h4 class="ui header">Search Query Syntax</h4>
                    </a>
                    <a class="item" href="/#/help?doc=contributing">
                        <h4 class="ui header">Contributing</h4>
                    </a>
                    <a class="item" href="/#/help?doc=templates">
                        <h4 class="ui header">Templates</h4>
                    </a>
                </div>
            </div>
            <div class="ten wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div style="padding:25px!important;">
                    <h1>Help Docs</h1>

                    <div v-if="helpDoc == 'query-syntax'">
                        <div class="ui info message" v-if="helpDoc == 'query-syntax'">
                            <p>
                                <i class="ui warning red icon"></i>
                                Multi syntax is not currently supported. It means that you cannot combine multiple syntaxes
                                to get desired results. Multi syntax may be supported in a future release!
                            </p>
                        </div>
                        <QuerySyntax />
                    </div>

                    <div v-if="helpDoc == 'contributing'">
                        <p>link to youtube and vimeo videos</p>
                        <p>link to tiktok videos</p>
                        <p>link to other learning resources</p>
                    </div>

                    <div v-if="helpDoc == 'templates'">
                        <Templates />
                    </div>

                </div>
            </div>
            <div class="three wide computer column sixteen wide tablet column mobile hidden">
                <ThreehundredByTwofifty />
            </div>
        </div>
        <Contact />
        <Bottom />
    </div>
</template>

<script>
import Navigation from './Navigation.vue';
import QuerySyntax from './Docs/QuerySyntax.vue'
import Templates from './Docs/Templates.vue'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'
import ThreehundredByTwofifty from './Ads/300X250.vue'

export default {
    name: "Help",
    computed: {
        helpDoc() {
            return this.$route.query.doc
        }
    },
    components: {
        ThreehundredByTwofifty,
        Navigation,
        QuerySyntax,
        Templates,
        Contact,
        Bottom
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}

.margin-top-150 {
    margin-top: 158px;
}
</style>
