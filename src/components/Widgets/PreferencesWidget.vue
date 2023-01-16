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
            <br />
            <div class="grouped fields">
                <div class="field">
                    <label>
                        topics (select as many as possible)
                    </label>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>fitfam</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>main dishes</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>side dishes</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>vegan</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>party</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>african</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>chinese</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>indian</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>canadian</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>american</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>aboriginal</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>beginner</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>culnary school</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>secret recipes</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>dogs</label>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>cats</label>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="example1">
                            <label>random stuff</label>
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