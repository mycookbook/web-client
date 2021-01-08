<template>
<div class="ui container">
	<Navigation />
    <div class="margin-top-150"></div>
    <div class="ui center aligned grid">
        <div class="sixteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div class="ui huge header">
                Showing {{ results.length }} of {{ results.length }} results for " {{ qu.q }} "
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
                    <label>Show Archived</label>
                    <input type="checkbox" name="showArchived" id="showArchived">
                </div>
            </div>
        </div>
        <div class="thirteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div>
                <div class="ui fluid action input">
                    <input type="text" placeholder="Start typing..." :value="qu.q">
                    <div class="ui tbb button">Search</div>
                </div>
            </div>
            <div>
                <span style="float:right!important;">
                    <small>
                        <a href="https://www.algolia.com" target="_blank">
                            Powered by Algolia
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
            <div>
                <span>
                    <small>
                        <a class="link" @click="sortBy('newest')">
                            sort by most recent |
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
                    <span>
                        <small>
                            <b>{{ result.resource_type }}</b> > By {{ result.author }} > {{ result.created_at }}
                        </small>
                    </span>
                </div>
                <div>
                    <a :href="getUri(result.id)">
                        <h4>{{ result.name }}</h4>
                    </a>
                </div>
                <div>
                    {{ (isCookbook(result.resource_type)) ? (result.description + '...') : (result.summary + '...') }}
                </div>
                <div class="margin-top-15"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
    name: 'SearchResults',
    data() {
        return {
            qu: this.$route.query,
            results: JSON.parse(localStorage.getItem('search'))
        }
    },
    methods: {
        isCookbook(type) {
            return (type === "cookbook")
        },
        isRecipe(type) {
            return (type === "recipe")
        },
        getUri(id) {
            return '/#/cookbook/' + id
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
