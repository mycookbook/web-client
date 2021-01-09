<template>
<div class="ui container">
	<Navigation />
    <div class="margin-top-150"></div>
    <div class="ui center aligned grid">
        <div class="sixteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div class="ui huge header">
                Showing {{ results.length }} of {{ results.length }} results for " {{ rss }} "
            </div>
        </div>
    </div>
    <div class="ui grid">
        <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column" style="border-right:solid #eeeeee 1px;">
            <div style="margin-bottom:8px;font-weight:bold;">
                Advanced Search Filters
            </div>
            <div class="tvn horizontal stroke"></div>
            <div class="margin-top-15"></div>
            <div class="checkboxes">
                <div class="ui checkbox">
                    <label>Hide Author</label>
                    <input type="checkbox" name="showAuthor" id="showAuthor">
                </div>
                <div class="ui checkbox">
                    <label>Hide Cookbooks</label>
                    <input type="checkbox" name="showCookbooks" id="showCookbooks">
                </div>
                <div class="ui checkbox">
                    <label>Hide Recipes</label>
                    <input type="checkbox" name="showRecipes" id="showRecipes">
                </div>
                <div class="ui checkbox">
                    <label>Hide Varieties</label>
                    <input type="checkbox" name="showVarieties" id="showVarieties">
                </div>
                <div class="ui checkbox">
                    <label>Show Recipes open for orders only</label>
                    <input type="checkbox" name="openForoOders" id="openForoOders">
                </div>
                <div class="ui checkbox">
                    <label>Show Marketplace items only</label>
                    <input type="checkbox" name="showmarketPlace" id="showmarketPlace">
                </div>
                <div class="ui checkbox">
                    <label>Show Archived</label>
                    <input type="checkbox" name="showArchived" id="showArchived">
                </div>
            </div>
        </div>
        <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div>
                <div class="ui fluid action input">
                    <input type="text" placeholder="Start typing..." v-model="searchq">
                    <div class="ui tbb button" @click="searchForQuery()">
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
            <div class="margin-top-15"></div>
            <div>
                <small>About 9,290,000 results (0.53 seconds)</small>
            </div>
            <div class="margin-top-15"></div>
            <div>
                <div><b>Ad · www.createmycookbook.com</b></div>
                <div class="ui header" style="margin-top:5px!important;">
                    <a href="/">Design Your Own Cookbook - CreateMyCookbook.com</a>
                </div>
                <div class="ui grid content container">
                    <div style="width:80%!important;margin-left:-13px!important;">
                        Upload Recipes and Photos. Easy to Use Cookbook Designer. Get Started for Free. 
                        Upload Your Own Recipes &#38; Photos Makes The Perfect Sentimental Gift. 
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="tvn horizontal stroke"></div>
            <br /><br />
            <div>
                <div><b>Ad · www.chapters.indigo.ca</b></div>
                <div class="ui header" style="margin-top:5px!important;">
                    <a href="/">Bestselling Cookbooks | chapters.indigo.ca</a>
                </div>
                <div class="ui grid content container">
                    <div style="width:80%!important;margin-left:-13px!important;">
                        Join plum Plus to save an additional 10% off &#38; enjoy free shipping everyday! 
                        Sign-up today. Save up to 40% on bestseller books in-store &#38; online at Indigo + 
                        free shipping over $35! Curbside Pickup Available. Save 10% with Plum Plus. 
                        1% for Childrens Literacy.
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="tvn horizontal stroke"></div>
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
                    <span v-if="result.resource_type === 'cookbook' && result.is_locked ">
                        <i class="ui lock icon"></i> <small>Private</small>
                    </span>
                    <span v-if="result.resource_type === 'cookbook' && !result.is_locked ">
                        <i class="ui unlock icon"></i> <small>Community</small>
                    </span>
                    <span v-if="result.resource_type === 'recipe' && (result.author_can_take_orders)">
                        <i class="shopping basket icon"></i>
                    </span>
                    <span>
                        <small>
                            <b>{{ result.resource_type }}</b> > <a :href="getUri('contributor', result.author_id)">By {{ result.author_name }}</a> > {{ result.created_at }}
                        </small>
                    </span>
                </div>
                <div>
                    <a :href="getUri(result.resource_type, result.id)">
                        <h4>{{ result.name }}</h4>
                    </a>
                </div>
                <div>
                    {{ (isCookbook(result.resource_type)) ? (result.description + '...') : (result.summary + '...') }}
                </div>
                <div class="margin-top-15"></div>
            </div>
            <div v-show="results.length > 0">
                <span style="float:right!important;">
                    <small>
                        <a href="">See more</a>
                    </small>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
    name: 'SearchResults',
    mounted() {
        this.$store.dispatch('empty_results_object')

        if (this.$route.query.q !== "") {
            this.$store.dispatch('fetch_results', this.$route.query.q)
        }
    },
    computed: {
        results() {
			return this.$store.state.searchStore.results
		},
        rss() {
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
        getUri(type, id) {
            if (type === 'cookbook') {
                return '/#/cookbook/' + id
            }

            if (type === 'recipe') {
                return '/#/recipe/' + id
            }

            if (type === 'contributor') {
                return '/#/contributor/' + id
            }
        },
        searchForQuery() {
            this.$store.dispatch('empty_results_object')
            this.$store.dispatch('fetch_results', this.searchq)
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
        Navigation
    }
};
</script>

<style scoped>
.margin-top-15 {
    margin-top: 15px;
}
.margin-top-150 {
    margin-top: 158px;
}
.checkboxes .checkbox {
    margin: 10px;
}
.capitalize {
    text-transform: capitalize!important;
}
</style>
