<template>
<div>
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
</template>

<script>
export default {
    name: "AdvancedSearchFilters",
    data() {
        return {}
    }
};
</script>
