<template>
    <div v-if="showFeedbackWidget">
        <div class="ui info message">
            <div v-if="!submitted">
                <b>Hello there, we hope you are having the best experience! How likely are you to recommend
                    this app to your friends?</b>
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
                <div class="field" v-if="stillThinking">
                    <div class="ui fluid basic large label">
                        <div class="ui header" style="margin-left:31%;cursor:default;">
                            No worries, we gatchu!
                        </div>
                    </div>
                </div>
                <div class="field" v-if="submitted">
                    <div class="ui fluid basic large label">
                        <div class="ui header" style="margin-left:34%;cursor:pointer;">
                            Copy shareable link
                        </div>
                        <div class="ui header" style="margin-left:29%;cursor:pointer;color: #ccc;">
                            https://shorturl.at/BKPRT
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
            </div>
        </div>
    </div>
</template>
    
<script>
import store from '@/store';

export default {
    name: "Feedback",
    computed: {
        showFeedbackWidget() {
            if (this.$store.state.active_user.hasOwnProperty('onboarding')) {
                return (this.$store.state.active_user.onboarding.likelihoodToShare != "definitely")
            }
            return true
        }
    },
    data() {
        return {
            stillThinking: false,
            probably: false,
            veryLikely: false,
            submitted: false,
            selectedOption: 'definitely',
            isCopied: false
        }
    },
    methods: {
        submitFeedback() {
            if (['still-thinking', 'probably'].includes(this.selectedOption)) {
                this.stillThinking = !this.stillThinking
                this.submitted = true;
            } else {
                this.submitted = !this.submitted
            }

            this.$store.dispatch('send_feedback', this.selectedOption)
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