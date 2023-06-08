<template>
    <div>
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui centered header">We thought you might like the following recipes</div>
            <div>
                <div class="ui small centered images" style="margin-left:5%!important;">
                    <a href="/#" title="">
                        <img
                            src="https://images.unsplash.com/photo-1609534767446-96f9d43c5bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OENrYldOUXJGQnN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
                    </a>
                    <a href="/#">
                        <img
                            src="https://images.unsplash.com/photo-1565733618599-cb82f14f34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8OENrYldOUXJGQnN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
                    </a>
                    <a href="/#">
                        <img
                            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxOMFNneTRmN2h5QXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                    </a><a href="/#">
                        <img
                            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xOMFNneTRmN2h5QXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                    </a>
                    <a href="/#">
                        <img
                            src="https://images.unsplash.com/photo-1539102113920-32874e87fc97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8OENrYldOUXJGQnN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
                    </a>
                    <a href="/#">
                        <img
                            src="https://images.unsplash.com/photo-1448832328263-620a1a483228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MjE4MDE2Nnx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

export default {
    name: "PeopleWithSimilarInterests",
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