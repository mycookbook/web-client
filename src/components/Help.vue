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
                <div class="ui vertical menu">
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
            <div class="sixteen wide mobile only">
                <div class="ui three item menu" style="margin-left:15px!important;">
                    <a class="item" href="/#/help?doc=query-syntax">
                        <h4 class="ui header">Search Query Syntax</h4>
                    </a>
                    <a class="item" href="/#/help?doc=templates">
                        <h4 class="ui header">Templates</h4>
                    </a>
                </div>
            </div>
            <div class="eight wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div style="padding:25px!important;">
                    <h1>Help Docs</h1>

                    <div v-if="helpDoc == 'query-syntax' || helpDoc == undefined">
                        <div class="ui info message" v-if="helpDoc == 'query-syntax' || helpDoc == undefined">
                            <p>
                                <i class="ui warning red icon"></i>
                                Multi syntax is not currently supported. It means that you cannot combine multiple syntaxes
                                to get desired results. Multi syntax may be supported in a future release!
                            </p>
                        </div>
                        <QuerySyntax />
                    </div>

                    <div v-if="helpDoc == 'templates'">
                        <Templates />
                    </div>

                    <div v-if="helpDoc == 'faqs'">
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
                        <br /><br /><br />
                        <div v-if="relevant_question.length == 0 || relevant_question.includes(1)">
                            <h3>Q: Why am I not able to log in with TikTok?</h3>
                            <div>
                                <p>
                                    There are a few reasons why you are experiencing issues logging in to cookbooks with
                                    your tiktok account.
                                </p>
                                <ul>
                                    <li>
                                        Your profile is private. Try making your profile public.
                                    </li>
                                    <li>
                                        We need access to your tiktok videos. Allow access to your
                                        videos on the tiktok login screen. Click edit access and enable the
                                        <i><span style="background-color: yellow;">Read your public videos on
                                                TikTok</span></i> button.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div v-if="relevant_question.length == 0 || relevant_question.includes(2)">
                            <h3>Q: Someone stole my recipe from my website, how do I take it down?</h3>
                            <div>
                                <p>
                                    We are so sorry to hear that! Please note that we take <a
                                        href="#/contributing-guidelines">matters of plagiarism very seriously</a>.
                                    We do not encourage the stealing of other people's intellectual property. Kindly let us
                                    know the recipe in question by using the report recipe tool. It can be found on the top
                                    right corner on the recipe page.
                                </p>
                                <p>
                                    Our specialists will take a look and
                                    take it down immediately from all our servers if it violates our <a
                                        href="#/contributing-guidelines">contributing guidelines.</a>
                                    Thank you in advance for helping us make this
                                    community a better place.
                                </p>
                            </div>
                        </div>
                        <br />
                        <div v-if="relevant_question.length == 0 || relevant_question.includes(3)">
                            <h3>Q: What are the terms and conditions of this website?</h3>
                            <div>
                                The terms and conditions can be found <a href="#/terms-and-conditions">here.</a> We
                                encourage you to use this platform <a href="#/contributing-guidelines">responsibly.</a>
                            </div>
                        </div>
                        <br />
                        <div v-if="relevant_question.length == 0 || relevant_question.includes(4)">
                            <h3>Q: What is Cookbooks?</h3>
                            <div>
                                We're glad you're asking! Cookbooks is a repository of recipes, food and drinks. It allows
                                users such as your self to <a href="/#/search?q=%3Atags%7Ccookbooks%20vegan">search</a> for
                                an unlimited number of recipes absolutely free of charge and does not require you to be a
                                user on the platform to do so. In addition, it provides premium features that can help small
                                business owners moneytize their goods and
                                services.
                            </div>
                        </div>
                        <br />
                        <div v-if="relevant_question.length == 0 || relevant_question.includes(5)">
                            <h3>Q: How do I create a recipe?</h3>
                            <div>
                                To create a recipe, you need to be <a href="/#/signin">logged in</a> using your
                                tiktok account. You will be redirected to your dashboard page, where you can start creating
                                recipes right away.
                            </div>
                        </div>
                        <br />
                        <div v-if="relevant_question.length == 0 || relevant_question.includes(6)">
                            <h3>Q: How can I promote my grocery shop or business on this website?</h3>
                            <div>
                                This capability is provided as a premium feature. You will need a subscription to enable
                                these functionalities. TBD
                            </div>
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

export default {
    name: "Help",
    computed: {
        helpDoc() {
            return this.$route.query.doc
        }
    },
    data() {
        return {
            advQuery: '',
            q: '',
            keywords: {
                'login': [1],
                'logging': [1],
                'recipe': [2, 5],
                'report': [2],
                'about': [4],
                'search': [3]
            },
            relevant_question: []
        };
    },
    methods: {
        search(e) {
            if (e.which == 13) {
                if (e.target.placeholder == 'Advanced Search') {
                    this.$router.push({ name: 'SearchResults', query: { q: this.advQuery } })
                } else {
                    let words = this.q.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, ' ').split(' ')
                    const objKeys = Object.keys(this.keywords)

                    let keywords = objKeys.filter(function (i) {
                        return words.includes(i)
                    })

                    let k = this.keywords

                    let questions = []

                    keywords.forEach(function (el) {
                        if (k.hasOwnProperty(el)) {
                            k[el].forEach(function (m) {
                                questions.push(m)
                            })
                        }
                    })

                    let deduped = questions.filter(function (s, index) {
                        return questions.indexOf(s) === index;
                    });

                    this.relevant_question = deduped
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
</style>
