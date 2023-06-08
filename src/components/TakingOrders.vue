<template>
    <div>
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Grilled salmon steak</h3>
                        <div class="description">
                            <small>
                                Skip the queue and get the ingredients of this <a>recipe</a> shipped right to your door
                                steps in one easy step!
                            </small>
                            <br /><br />
                            <div class="ui tbb button"><i class="ui shopping cart icon"></i>Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid image">
                <a class="ui red right ribbon label">
                    Taking Orders
                </a>
                <a href="/#/">
                    <img
                        src="https://images.unsplash.com/photo-1641898378716-1f38ec04bb0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80">
                </a>
            </div>
        </div>
        <br />
        <div class="ui circular basic label" style="margin-left:45%;cursor: pointer;">see all</div>
    </div>
</template>
    
<script>
import Navigation from './Navigation.vue';

export default {
    name: "TakingOrders",
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