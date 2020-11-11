<template>
<div class="ui container">
	<Navigation />
    <div class="ui grid">
        <div class="sixteen wide mobile column sixteen wide tablet column sixteen wide computer column sixteen wide large screen column margin-top-15">
            <div class="ui inverted segment">
                <div class="ui inverted accordion">
                    <div class="title active">
                        <i class="dropdown icon"></i>
                            Advanced Search
                    </div>
                    <div class="content">
                        <p class="transition visible">
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ui grid">
    <div>
    <div class="ui category search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="Search animals...">
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
</div>
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
