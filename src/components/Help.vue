<template>
    <div class="ui container">
        <Navigation />
        <div class="margin-top-150"></div>
        <div class="ui grid">
            <div class="three wide computer column sixteen wide tablet column mobile hidden">
                <div class="ui category search">
                    <div class="ui icon input">
                        <input v-model="advQuery" class="prompt" type="text" placeholder="Advanced Search" @keyup="search">
                    </div>
                    <div class="results"></div>
                </div>
                <div class="ui vertical fluid menu">
                    <a class="item" href="/#/help?doc=query-syntax">
                        <h4 class="ui header">Search Query Syntax</h4>
                        <small>Learn how to get fine-grained results using our homegrown query syntax</small>
                    </a>
                    <a class="item" href="/#/help?doc=templates">
                        <h4 class="ui header">Recipe Templates</h4>
                        <small>
                            Quickly create a recipe by choosing from beautiful templates
                        </small>
                    </a>
                    <a class="item" href="/#/help?doc=faqs">
                        <h4 class="ui header">FAQs</h4>
                        <small>
                            Get help quickly by searching our faq resources
                        </small>
                    </a>
                </div>
            </div>
            <div class="eight wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div>
                    <h1 style="padding:0 5px!important;text-transform: capitalize!important;">
                        {{ pageTitle }}
                    </h1>
                    <div v-if="activeTab == 'query-syntax' || activeTab == undefined">
                        <div class="ui info message" v-if="activeTab == 'query-syntax' || activeTab == undefined">
                            <p>
                                <i class="ui warning red icon"></i>
                                Multi syntax is not currently supported. It means that you cannot combine multiple syntaxes
                                to get desired results. Multi syntax may be supported in a future release!
                            </p>
                        </div>
                        <QuerySyntax />
                    </div>
                    <div v-if="activeTab == 'templates'">
                        <Templates />
                    </div>
                    <div v-if="activeTab == 'faqs'">
                        <div class="ui category search">
                            <div class="ui icon fluid input">
                                <input class="prompt" v-model="q" type="text" @keyup="search"
                                    placeholder="Search Frequently Asked Questions...">
                                <i class="search icon"></i>
                            </div>
                            <div class="results"></div>
                        </div>
                        <small style="float:right">
                            <i>Can't find what you're looking for? <a href="mailto:cookbookshq@gmail.com">Send us an
                                    email</a></i>
                        </small>
                        <br />
                        <div v-for="faq in faqs">
                            <br />
                            <h3>
                                {{ faq.question }}
                            </h3>
                            <div v-html="faq.answer"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="five wide computer column sixteen wide tablet column mobile hidden">
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
import faqs from '../../data/faqs.js'

export default {
    name: "Help",
    computed: {
        activeTab() {
            return this.$route.query.doc
        },
        pageTitle() {
            let title = this.$route.query.doc

            if (title === 'faqs') {
                title = 'frequently asked questions'
            }

            if (title === 'query-syntax') {
                title = 'search query syntax'
            }

            if (title === 'templates') {
                title = 'recipe templates'
            }

            return title
        }
    },
    data() {
        return {
            advQuery: '',
            q: '',
            faqs: Object.values(faqs.data),
        };
    },
    methods: {
        search(e) {
            if (e.which == 13) {
                if (e.target.placeholder == 'Advanced Search') {
                    this.$router.push({ name: 'SearchResults', query: { q: this.advQuery } })
                } else {
                    const words = this.q.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, ' ').split(' ')
                    const faqs = this.faqs
                    let res = []

                    words.forEach(function (w) {
                        if (w.length > 0) {
                            for (let i = 0; i < faqs.length; i++) {
                                if (faqs[i].keywords.includes(w)) {
                                    res.push(faqs[i])
                                }
                            }
                        }
                    })

                    if (res.length > 0) {
                        this.faqs = res
                    } else {
                        location.reload()
                    }
                }
            }
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

.showOrHide {
    display: none !important;
}

.highlight-yellow {
    background-color: yellow;
}
</style>
