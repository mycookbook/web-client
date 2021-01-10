<template>
<div class="ui container">
	<Navigation />
    <div class="margin-top-150"></div>
    <div class="ui center aligned grid">
        <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column"></div>
        <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div class="ui huge header">
                Showing {{ results.length }} of {{ results.length }} results for "{{ showing }}"
            </div>
        </div>
    </div>
    <div class="ui grid">
        <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column" style="border-right:solid #eeeeee 1px;">
            <AdvancedSearchFilters />
        </div>
        <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div>
                <div class="ui fluid action input">
                    <input type="text" placeholder="Try bread, butter or peppermint tea recipe" v-model="searchq" @keyup="searchForQuery" >
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
            <div class="margin-top-15"></div>
                <GoogleAdSense />
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
                            <b>{{ result.resource_type }}</b> > 
                            <a :href="getUri('contributor', result.username)">By {{ result.author_name }}</a> 
                            > {{ result.created_at }}
                        </small>
                    </span>
                </div>
                <div>
                    <a class="link">
                        <div v-if="isCookbook(result.resource_type)" @click="redirectTo(result.resource_type, result.cookbook_slug, result.cookbook_id)">
                            <h4>{{ result.cookbook_name }}</h4>
                        </div>
                        <div v-else @click="redirectTo(result.resource_type, result.recipe_slug, result.recipe_id)">
                            <h4>{{ result.recipe_name }}</h4>
                        </div>
                    </a>
                </div>
                <div>
                    {{ (isCookbook(result.resource_type)) ? (result.description + '...') : (result.summary + '...') }}
                </div>
                <div class="margin-top-15"></div>
            </div>
            <!--<div v-show="results.length > 0">
                <span style="float:right!important;">
                    <small>
                        <a href="">See more</a>
                    </small>
                </span>
            </div>-->
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
        this.$store.dispatch('empty_results_object')

        if (this.$route.query.q !== "") {
            this.$store.dispatch('fetch_results', this.$route.query.q)
        }
    },
    computed: {
        results() {
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
                return '/#/contributors/@' + c
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

            this.$router.replace({ name, params:{ slug, id } });
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
.margin-top-150 {
    margin-top: 158px;
}
.checkboxes .checkbox {
    margin: 10px;
}
.capitalize {
    text-transform: capitalize!important;
}
.link {
    cursor: pointer!important;
}
</style>
