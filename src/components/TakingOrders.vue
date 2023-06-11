<template>
    <div>
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Yippy, <b>{{ userName }}</b></h3>
                        <div class="description">
                            <small>
                                Shop the ingredients of these mouth watery <a>recipes</a> and have them shipped right to
                                your door
                                step in just one easy step!
                            </small>
                            <br /><br />
                            <div class="ui tbb button">
                                <i class="ui shopping cart icon"></i>
                                Start adding to your cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid image">
                <a class="ui orange right ribbon label">
                    Available to Order
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
import store from '@/store';

export default {
    name: "TakingOrders",
    computed: {
        userName() {
            return this.$store.state.active_user.name
        }
    },
};
</script>
    
<style scoped>
.container {
    margin-top: 23vh;
}
</style>