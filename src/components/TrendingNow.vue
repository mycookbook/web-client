<template>
    <div>
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Breakfast for Champions_2</h3>
                        <div class="description">
                            <small>
                                10+ people are talking about this easy to make at home <a href="/#/">recipe</a> already! Join in the
                                conversation,
                                see what's cooking!
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid image">
                <a class="ui red right ribbon label">
                    Trending now
                </a>
                <a href="/#/">
                    <img
                        src="https://images.unsplash.com/photo-1543551659-9fe3726ffb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80">
                </a>
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