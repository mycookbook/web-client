<template>
    <div class="ui mini images">
        <img class="ui circular image contributor-avatar" 
        :title="contributor.name" 
        :src="contributor.avatar" 
        v-for="contributor in contributors">
        <div class="ui small button" title="View all contributors">
            <small class="contributors-count" v-if="contributors.length == 1">
                Cookbook admin
            </small>
            <small class="contributors-count" v-else>
                {{ contributors.length }} Contributor(s)
            </small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CookbookContributors',
    props: {
        contributors: Array
    }
}
</script>

<style scoped>
.contributor-avatar {
    margin-right: -28px!important;
    width: 36px!important;
    height: 32px!important;
}
</style>