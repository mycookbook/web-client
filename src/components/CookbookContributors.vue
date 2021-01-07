<template>
<div class="ui segment">
    <div class="ui item count">
        <b>{{ contributors.length }} contributor(s) </b><br />
        Including {{ author }} and {{ contributors.length - 1 }} other(s)
    </div>
    <div class="ui mini images">
        <div class="ui image" v-for="contributor in contributors.slice(0,10)">
            <img class="ui circular image contributor-avatar" 
                :title="contributor.name" 
                :src="contributor.avatar" 
            >
        </div>
        <div class="ui image">
            <a class="ui circular large label" style="margin-top:-15%!important;" v-if="contributors.length > 10">
                + {{ contributors.length - 10 }}
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CookbookContributors',
    props: {
        contributors: Array,
        author: String
    }
}
</script>

<style scoped>
.contributor-avatar {
    height: 32px!important;
}
.count {
    font-size: .89em!important;
    color: rgba(0,0,0,.5);
    padding-bottom: 15px;
}
</style>