<template>
    <div>
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Recipe ideas <i class="ui idea blue icon"></i></h3>
                        <div class="description">
                            <small>
                                Hey, do you know how to create this recipe? Be the first to submit a mouth watery post about
                                it!
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid fluid image">
                <a class="ui red right ribbon label">
                    Recommended
                </a>
                <a href="/#/">
                    <img
                        src="https://images.unsplash.com/photo-1543551659-9fe3726ffb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80">
                </a>
            </div>
            <br /><br />
            <div class="ui tbb button">
                <a href="/#/dashboard?tab=Recipes" style="color:white!important;">Create Recipe</a>
            </div>
        </div>
    </div>
</template>
    
<script>

export default {
    name: "TrendingNow",
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