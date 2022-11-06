<template>
    <div class="ui container">
        <Navigation />
        <div class="margin-top-150"></div>
        <div class="ui grid">
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column"></div>
            <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div class="ui huge header">
                    Showing {{ results.length }} of {{ results.length }} results for "{{ showing }}"
                </div>
            </div>
        </div>
        <div class="ui grid">
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column"
                style="border-right:solid #eeeeee 1px;">
                <AdvancedSearchFilters />
            </div>
            <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div>
                    <div class="ui fluid action input">
                        <input type="text" placeholder="Try: peppermint tea recipe" v-model="searchq"
                            @keyup="searchForQuery">
                        <div class="ui tbb button" @click="searchForQuery">
                            Search
                        </div>
                    </div>
                </div>
                <div>
                    <span style="float:right!important;">
                        <small>
                            <a href="/">
                                Cookbookshq <sup>&#174;</sup>
                            </a>
                        </small>
                    </span>
                </div>
                <div style="margin:18px!important">
                    <i class="lightbulb icon"></i>
                    <em>Did you know that you can search for more fine-grained results?
                        As an example, you can type <code>:cookbooks|author [all or part of author's name].</code> This
                        will list all the cookbooks that matches your search query!
                        <br /><br /> Neat right? Learn how to search like a pro using our homegrown</em>
                    <router-link :to="{
                    	name: 'Help',
                    	query: { doc: 'query-syntax' }
                    }">
                        query syntax
                    </router-link>
                </div>
                <div class="margin-top-25"></div>
                <div class="ui grid">
                    <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
                        <GoogleAdSense />
                    </div>
                    <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column">
                        <h4>Top 3 most searched recipe keywords in your location this week</h4>
                        <div style="padding-top:3%">
                            <div class="ui orange progress" data-percent="74" id="example1">
                                <div class="bar"></div>
                                <div class="label">Smoked Salmon 74%</div>
                            </div>
                            <div class="ui orange progress" data-percent="45" id="example2">
                                <div class="bar"></div>
                                <div class="label">Pulled Pork 45%</div>
                            </div>
                            <div class="ui orange progress" data-percent="99" id="example3">
                                <div class="bar"></div>
                                <div class="label">Jamaican Jerk Chicken 99%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="ui horizontal divider header">
                    Search Results
                </h4>
                <div v-show="results.length > 0">
                    <span>
                        <small>
                            <a class="link" @click="sortBy('newest')">
                                most recent |
                            </a>
                        </small>
                    </span>
                    <span>
                        <small>
                            <a class="link" @click="sortBy('oldest')">
                                oldest
                            </a>
                        </small>
                    </span>
                </div>
                <br />
                <div v-for="result in results" class="capitalize">
                    <div>
                        <span v-if="result.resource_type === 'cookbook' && result.is_locked">
                            <i class="ui lock icon"></i> <small>Private</small>
                        </span>
                        <span v-if="result.resource_type === 'cookbook' && !result.is_locked">
                            <i class="ui unlock icon"></i> <small>Community</small>
                        </span>
                        <span v-if="result.resource_type === 'recipe' && (result.author_can_take_orders)">
                            <i class="shopping basket icon"></i>
                        </span>
                        <span>
                            <small>
                                <b>{{ result.resource_type }}</b> >
                                <a :href="getUri('contributor', result.username)">
                                    By {{ result.author.name }}</a>
                                > {{ result.created_at }}
                            </small>
                        </span>
                    </div>
                    <div>
                        <a class="link">
                            <div v-if="isCookbook(result.resource_type)"
                                @click="redirectTo(result.resource_type, result.slug, result.id)">
                                <h4>{{ result.name }}</h4>
                            </div>
                            <div v-if="isRecipe(result.resource_type)"
                                @click="redirectTo(result.resource_type, result.slug, result.id)">
                                <h4>{{ result.name }}</h4>
                            </div>
                        </a>
                    </div>
                    <div>
                        {{ (isCookbook(result.resource_type)) ? (result.description + '...') : (result.summary + '...')
                        }}
                    </div>
                    <div class="margin-top-15"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import AdvancedSearchFilters from './AdvancedSearchFilters.vue'
import GoogleAdSense from './GoogleAdSense.vue'

export default {
    name: 'SearchResults',
    mounted() {
        this.initkeywords();

        this.$store.dispatch('empty_results_object')

        if (this.$route.query.q !== "") {
            this.searchq = this.$route.query.q
            this.$store.dispatch('fetch_results', this.$route.query.q)
        }
    },
    computed: {
        results() {
            console.log('resultsss', this.$store.state.searchStore.results)
            return this.$store.state.searchStore.results
        },
        showing() {
            if (this.$route.query.q !== "") {
                if (this.searchq !== "") {
                    return this.searchq
                }

                return this.$route.query.q
            }
        }
    },
    data() {
        return {
            searchq: ""
        }
    },
    methods: {
        isCookbook(type) {
            return (type === "cookbook")
        },
        isRecipe(type) {
            return (type === "recipe")
        },
        getUri(type, c, r) {
            if (type === 'cookbook') {
                return '/#/cookbooks/' + c
            }

            if (type === 'recipe') {
                return '/#/recipes/' + r
            }

            if (type === 'contributor') {
                return '/#/contributors/' + c
            }
        },
        searchForQuery(e) {
            if (e.which == 13) {
                this.$store.dispatch('empty_results_object')
                this.$store.dispatch('fetch_results', this.searchq)
            }
            this.$store.dispatch('empty_results_object')
            this.$store.dispatch('fetch_results', this.searchq)
        },
        redirectTo(type, slug, id) {
            let name = "default"

            if (type === "cookbook") {
                name = "Cookbook"
            }

            if (type === "recipe") {
                name = "Recipe"
            }

            this.$router.replace({ name, params: { slug, id } });
        },
        sortBy(order) {
            this.$store.dispatch('sort_results_by', order)
        },
        initkeywords() {
            $('#example1').progress();
            $('#example2').progress();
            $('#example3').progress();
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
    components: {
        Navigation,
        AdvancedSearchFilters,
        GoogleAdSense
    }
};
</script>

<style scoped>
.margin-top-15 {
    margin-top: 15px;
}

.margin-top-20 {
    margin-top: 20px;
}

.margin-top-25 {
    margin-top: 75px;
}

.margin-top-150 {
    margin-top: 158px;
}

.checkboxes .checkbox {
    margin: 10px;
}

.capitalize {
    text-transform: capitalize !important;
}

.link {
    cursor: pointer !important;
}
</style>
