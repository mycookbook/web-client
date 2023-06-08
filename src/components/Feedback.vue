<template>
    <div>
        <div class="ui info centered message">
            <b>Hello there, we hope you are having the best experience! How likely are you to recommend
                this app to a friend?
                <br /><br />
                <div class="ui form">
                    <div class="inline fields">
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>Still checking this out</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>Probably</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>Very likely!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </b>
        </div>
    </div>
</template>
    
<script>

export default {
    name: "Feedback",
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
        return {
            title: 'This is an Example component'
        }
    },
    filters: {
        exampleFilter() { }
    },
    components: {
        Navigation
    }
};
</script>
    
<style scoped>
.container {
    margin-top: 23vh;
}
</style>