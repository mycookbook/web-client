<template>
    <div @click="selectDropDown()">
        <div class="ui fluid search selection dropdown">
            <input type="hidden" name="country">
            <i class="dropdown icon"></i>
            <div class="default text">Select Country</div>
            <div class="menu">
                <div class="item" v-bind:data-value="selectCountryCode(f.code)" v-for="f in flags">
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
import flags from '../../../data/all.js'

export default {
    name: 'FlagPickerWidget',
    data() {
        return {
            flags: Object.values(flags.data)
        }
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
        }
    }
}
</script>

<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>