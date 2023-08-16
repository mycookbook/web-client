<template>
    <div @click="selectDropDown()">
        <div id="cookbookDropdown" class="ui fluid search selection dropdown" @click="getValue()">
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
    mounted(){
        $('#cookbookDropdown').dropdown();
    },

    methods: {
        selectDropDown() {
            $('.ui.dropdown').dropdown();
        },
        selectCookbookCode(code) {
            return code
        },
        getValue() {
            const recievedCookbook = ($('#cookbookDropdown').dropdown('get value'))  
            this.selectedCookbook = recievedCookbook.trim()
        },
        getCode(the_code) {
            this.selectedCookbook = the_code;
        },
        setSelectedCookbook(name) {
           
            const cookbook = this.cookbooks.find(c => c.name === name);
            if (cookbook) {
                this.selectedCookbook = cookbook.id;
                $('#cookbookDropdown').dropdown('set selected', cookbook.id);
                $('#cookbookDropdown').dropdown('set text', `${cookbook.name}`);
            }
        }
    }
}
</script>

<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>