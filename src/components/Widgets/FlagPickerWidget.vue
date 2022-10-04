<template>
    <div @click="selectDropDown()">
        <div id="nationalityDropdown" class="ui fluid search selection dropdown" @click="getValue()">
            <input type="hidden" name="country">
            <i class="dropdown icon"></i>
            <div class="default text">Select Country</div>
            <div class="menu">
                <div class="item" v-bind:data-value="selectCountryCode(f.code)" v-for="f in flags" @click="getNationalCode(f.code)">
                    <i :class="generateFlagClass(f.code)"></i>
                    <span class="capitalize">
                        {{ f.country }}
                    </span>
                    <span class="ui right floated capitalize">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'FlagPickerWidget',
    computed: {
        ...mapGetters('dataStore', ['getFlags']),
    },
    data() {
        return {
            flags: Object.values(flags.data),
            selectedCountry: "",
            selectedCode: "",
        }
    },
    watch: {
        selectedCountry(newValue, oldValue) {
            this.$emit("passNationality", newValue)
        },
        selectedCode(newValue, oldValue) {
            this.$emit("passNationalityCode", newValue)
        },
        deep: true,
        immediate: true
    },

    methods: {
        generateFlagClass: function (code) {
            let class_ = code + " flag";
            return class_;
        },
        selectCountryCode: function (code) {
            return code
        },
        selectDropDown() {
            $('.ui.dropdown').dropdown();
        },
        getValue() {
            const recievedCountry = ($('#nationalityDropdown').dropdown('get text'))
            this.selectedCountry = recievedCountry.trim(" ")
        },
        getNationalCode(the_code){
            this.selectedCode = the_code;
        }
    }
}
</script>

<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>