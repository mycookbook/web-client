<template>
    <div>
        <div class="ui form">
            <div class="field">
                <label>
                    search and set default Cookbook
                </label>
                <input type="text" placeholder="e.g vegan cookbook" />
            </div>
            <br />
            <div class="field">
                <label>
                    select your prefered default cover image picker
                </label>
                <div>
                    <div class="ui form">
                        <div class="grouped fields">
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" checked="checked">
                                    <label>Image uploader</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2">
                                    <label>Stock photo url</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="fluid ui tbb button">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preferences",
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
        return {}
    }
}
</script>