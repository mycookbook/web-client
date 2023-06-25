<template>
    <div>
        <Navigation />
    </div>
</template>
    
<script>
export default {
    name: "Cart",
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
    components: {
        Navigation
    }
};
</script>
    
<style scoped>
.container {
    margin-top: 23vh;
}
</style>