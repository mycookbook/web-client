<template>
    <div class="ui grid">
        <div class="thirteen wide computer column sixteen wide mobile column">
            <div class="ui mini breadcrumb">
                <a class="section">Dashboard</a>
                <i class="right chevron icon divider"></i>
                <div class="active section">Cookbooks</div>
            </div>
        </div>
        <div class="three wide computer column sixteen wide mobile column">
            <div class="ui mini tbb button">
                <i class="ui plus icon"></i>
                Create
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardBreadcrumb",
    mounted() { },
    computed: {
        example() {
            return true
        }
    },
    props: {
        numbers: Array
    },
    data() {
        return {
            title: 'This is an Example component'
        }
    },
    filters: {
        exampleFilter() { }
    },
    components: {}
};
</script>

<style scoped>
.example-class {
    color: #000000;
}
</style>