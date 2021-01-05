<template>
<div>
    <div class="ui fluid action input">
        <input type="text" placeholder="search recipes in this cookbook">
        <select class="ui compact selection dropdown" style="height:auto!important;">
            <option value="all">By Contributor</option>
            <option selected="" value="articles">By Recipe Name</option>
            <option value="products">By Ingredient name</option>
        </select>
        <div class="ui tbb button">Search</div>
    </div>
</div>
</template>

<script>
export default {
    name: "SearchCookbook",
    props: {
        numbers: Array
    }
};
</script>
