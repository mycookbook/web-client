<template>
    <div @click="selectDropDown()">
        <div id="nationalityDropdown" class="ui fluid search selection dropdown" @click="getValue()">
            <input type="hidden" name="country">
            <i class="dropdown icon"></i>
            <div class="default text">Select Country</div>
            <div class="menu">
                <div class="item" v-bind:data-value="selectCountryCode(f.code)" v-for="f in flags"
                    @click="getNationalCode(f.code)">
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
            selectedCountry: "",
            selectedCode: "",
            flags: Object.values(this.$store.state.dataStore.flags),
        }
    },
    created() {
        this.$store.dispatch("fetchFlags").then(() => {
        });
    },
    watch: {
        selectedCountry(newValue, oldValue) {
            this.$emit("passNationality", newValue)
        },
        selectedCode(newValue, oldValue) {
            this.$emit("passNationalityCode", newValue)
        },
        flags: {
            immediate: true,
            handler(newValue) {
            },
        },
        deep: true,
        immediate: true
    },

    mounted() {
        $('#nationalityDropdown').dropdown();
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
        getNationalCode(the_code) {
            this.selectedCode = the_code;
        },
        setCountry(country) {
            this.selectedCountry = country;
            $('#nationalityDropdown').dropdown('set selected', country);
        },
        getCountryByCode(code) {
            const countryObj = this.flags.find(f => f.code === code);
            return countryObj ? countryObj.country : '';
        },
        updateDropdownValueByCode(code) {
            const countryObj = this.flags.find(f => f.id === code);
            if (countryObj) {
                const country = countryObj.country;
                this.selectedCountry = country;
                this.selectedCode = code;
                $('#nationalityDropdown').dropdown('set selected', code);
                $('#nationalityDropdown').dropdown('set text', `<i class="${this.generateFlagClass(code)}"></i> ${country}`);
            } else {
                console.log("Country not found for code: ", code);
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