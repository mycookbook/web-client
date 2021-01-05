<template>
<div>
    <div class="ui fluid action input">
        <input type="text" placeholder="search recipes in this cookbook">
        <select class="ui compact selection dropdown" style="height:auto!important;">
            <option value="all">By contributor</option>
            <option selected="" value="articles">By recipe Name</option>
            <option value="products">By ingredient name</option>
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
  },
  data() {
    return {
		title: 'What to do with LeftOvers'
    }
  }
};
</script>
