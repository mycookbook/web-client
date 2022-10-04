<template>
    <div @click="selectDropDown()">
        <div id="cookbookDropdown" class="ui fluid search selection dropdown">
            <input type="hidden" name="cookbook">
            <i class="dropdown icon"></i>
            <div class="default text">Select cookbook</div>

            <div class="menu">
                <div class="item" v-bind:data-value="selectCookbookCode(c.id)" v-for="c in cookbooks"
                    @click="getCode(c.id)">
                    <span class="capitalize">
                        {{ c.name }}
                    </span>
                    <span class="ui right floated capitalize">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CookbookSelectorWidget',
    computed: {
        lala() {
            return this.$store.state.cookbookStore.cookbooks
        }
    },
    data() {
        return {
            selectedCookbook: "",
            cookbooks: Object.values(this.$store.state.cookbookStore.cookbooks),
        }
    },

    watch: {
        selectedCookbook(newValue, oldValue) {
            this.$emit("passCookbookCode", newValue)
        },
        deep: true,
        immediate: true
    },

    methods: {
        selectDropDown() {
            $('.ui.dropdown').dropdown();
        },
        selectCookbookCode(code) {
            return code
        },
        getCode(the_code) {
            this.selectedCookbook = the_code;
        },
    }
}
</script>

<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>