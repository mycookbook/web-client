<template>
<div class="ui container">
	<Navigation />
    <div class="margin-top-150"></div>
    <div class="ui center aligned grid">
        <div class="sixteen wide computer column sixteen wide mobile column sixteen wide tablet column">
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
                            <b>{{ result.resource_type }}</b> > <a :href="getUri('contributor', result.author_id)">By {{ result.author_name }}</a> > {{ result.created_at }}
                        </small>
                    </span>
                </div>
                <div>
                    <a :href="getUri(result.resource_type, result.cookbook_id, result.recipe_id)">
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
                return '/#/cookbook/' + c
            }

            if (type === 'recipe') {
                return '/#/cookbook/' + c + '/recipe/' + r
            }

            // if (type === 'contributor') {
            //     return '/#/contributor/' + id
            // }
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
</style>
