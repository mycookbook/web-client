<template>
<div class="ui container">
	<Navigation />
    <div class="margin-top-150"></div>
    <div class="ui center aligned grid">
        <div class="sixteen wide computer column sixteen wide mobile column sixteen wide tablet column">
            <div class="ui huge header">
                Showing {{ itt.length }} of {{ itt.length }} results for " {{ qu.q }} "
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
                    <input type="text" placeholder="Search..." :value="qu.q">
                    <div class="ui tbb button">Search</div>
                </div>
            </div>
            <div>
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
                {{ itt }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
    name: 'SearchResults',
    props: {
        results: Array
    },
    data() {
        return {
            qu: this.$route.query,
            itt: JSON.parse(localStorage.getItem('search'))
        }
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
</style>
