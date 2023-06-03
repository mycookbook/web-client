<template>
    <div class="ui grid">
        <div class="sixteen wide computer column sixteen wide mobile column">
            <div class="ui mini breadcrumb">
                <a class="section" href="/#/">
                    <i class="icon home"></i> Home
                </a>
                <i class="right chevron icon divider"></i>
                <a class="section">Dashboard</a>
                <i class="right chevron icon divider"></i>
                <div class="active section">
                    {{ active }}
                </div>
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
        active: String
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