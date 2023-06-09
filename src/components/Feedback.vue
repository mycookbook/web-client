<template>
    <div>
        <div class="ui info message">
            <div v-if="!submitted">
                <b>Hello there, we hope you are having the best experience! How likely are you to recommend
                    this app to a friend?</b>
                <br /><br />
            </div>
            <div class="ui form">
                <div class="inline fields" style="margin-left:40px;" v-if="!submitted">
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="feedback" value="still-thinking"
                                @click="selectOption('still-thinking')">
                            <label>Still checking this out</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="feedback" value="probably" @click="selectOption('probably')">
                            <label>Probably</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="feedback" checked="checked" value="definitely"
                                @click="selectOption('definitely')">
                            <label>Very likely</label>
                        </div>
                    </div>
                </div>
                <div class="field" v-if="!submitted">
                    <div class="ui fluid tbb button" @click="submitFeedback()">
                        Submit
                    </div>
                </div>
                <div class="field" v-if="submitted">
                    <div class="ui fluid basic large label">
                        <div class="ui header" style="margin-left:34%;cursor:default;">
                            Copy shareable link
                        </div>
                    </div>
                </div>
                <div class="field" v-if="isCopied">
                    <div class="ui fluid basic large disabled label">
                        <div class="ui header" style="margin-left:20%;cursor:default;">
                            Shareable link copied to your clipboard
                        </div>
                    </div>
                </div>
                <div class="field" v-if="stillThinking">
                    <div class="ui fluid basic large label">
                        <div class="ui header" style="margin-left:31%;cursor:default;">
                            No worries, we gatchu!
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/#/">Dismiss</a>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

export default {
    name: "Feedback",
    data() {
        return {
            stillThinking: false,
            probably: false,
            definitely: false,
            submitted: false,
            selectedOption: 'definitely',
            isCopied: false
        }
    },
    methods: {
        submitFeedback() {
            if (this.selectedOption === 'still-thinking') {
                this.stillThinking = !this.stillThinking
                this.submitted = true;
            } else {
                this.submitted = !this.submitted
            }
        },
        selectOption(option) {
            this.selectedOption = option
        }
    }
};
</script>
    
<style scoped>
.container {
    margin-top: 23vh;
}
</style>