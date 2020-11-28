<template>
<div class="ui container">
	<Navigation />
    <div class="ui grid">
        <div class="sixteen wide mobile column sixteen wide tablet column sixteen wide computer column sixteen wide large screen column margin-top-15">
            <h1>Coming soon</h1>
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
    data() {
        return {}
    },
    components: {
        Navigation
    }
};
</script>

<style scoped>
.margin-top-15 {
    margin-top: 15%;
}
</style>
