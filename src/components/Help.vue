<template>
    <div class="ui container">
        <Navigation />
        <div class="margin-top-150"></div>
        <div class="ui grid">
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div class="ui vertical menu">
                    <a class="item" href="/#/help?doc=query-syntax">
                        <h4 class="ui header">Advanced Search Query Syntax</h4>
                        <p>Learn how to get fine-grained results using our homegrown query syntax.</p>
                    </a>
                    <a class="item" href="/#/help?doc=contributing">
                        <h4 class="ui header">Contributing</h4>
                        <p>Check out our resources on how to be a contributor.</p>
                    </a>
                </div>
            </div>
            <div class="ten wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div style="padding:25px!important;">
                    <h1>Help Docs</h1>

                    <div v-if="helpDoc == 'query-syntax'">
                        <QuerySyntax />
                    </div>

                    <div v-if="helpDoc == 'contributing'">
                        <p>WIP</p>
                    </div>

                </div>
            </div>
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column"
                style="border-right:solid #eeeeee 1px;">
                <div class="ui info message" v-if="helpDoc == 'query-syntax'" style="width:300px!important;">
                    <p>
                        <i class="ui warning red icon"></i>
                        Multi syntax is not currently supported. It means that you cannot combine multiple syntaxes
                        to get desired results. Multi syntax may be supported in a future release!
                    </p>
                </div>
                <img src="https://drdrew.com/wp-content/uploads/2017/08/ad-space-placeholder-300x250-300x250.png" />
            </div>
        </div>
        <Contact />
        <Bottom />
    </div>
</template>
    
<script>
import Navigation from './Navigation.vue';
import QuerySyntax from './Docs/QuerySyntax.vue'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
    name: "Help",
    computed: {
        helpDoc() {
            return this.$route.query.doc
        }
    },
    components: {
        Navigation,
        QuerySyntax,
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