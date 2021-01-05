<template>
<div>
    <div class="ui fluid action input">
        <input type="text" placeholder="search recipes in this cookbook" v-model="searchText">
        <select class="ui compact selection dropdown" style="height:auto!important;" v-model="searchBy">
            <option value="contributor" selected="">By Contributor</option>
            <option value="recipe">By Recipe Name</option>
            <option value="ingredient">By Ingredient name</option>
        </select>
        <div class="ui tbb button" @click="searchCookbook()">
            Search
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "SearchCookbook",
    props: {
        numbers: Array
    },
    data() {
        return {
            searchText: "",
            searchBy: "recipe"
        }
    },
    methods: {
        searchCookbook() {
            const by = this.searchBy
            const q = this.searchText
            // this.$emit('increment')
            // this.$emit('sortList')
            this.$store.dispatch('oya', [q,by])
        }
    },
};
</script>
