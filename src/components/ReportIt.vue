<template>
    <div>
        <div class="ui red fluid button" :title="title" @click="ReportIt">
            <i class="ui bug icon"></i>
            Report it
        </div>
        <div class="ui modal">
            <div class="header">Thank you for submitting this report!</div>

            <form @submit.prevent="postReport">
                <div class="scrolling content">
                    <p>
                        Every time you submit a report, you help make
                        <a href="https://web.cookbookshq.com">cookbookshq</a>
                        more reliable, safe and accessible to billions of other
                        users on this platform and all over the internet. Thank
                        you so much! To proceed, please select as many options
                        as possible:
                    </p>
                    <div>
                        <input
                            v-model="formData.nudity"
                            ref="nudity"
                            type="checkbox"
                            id="nudity"
                            name="nudity"
                            value="nudity"
                        />
                        <label for="nudity">It contains Nudity</label
                        ><br /><br />

                        <input
                            v-model="formData.irrelevant"
                            ref="irrelevant"
                            type="checkbox"
                            id="irrelevant"
                            name="irrelevant"
                            value="irrelevant"
                        />
                        <label for="irrelevant"
                            >This content is irrelevant (it's not about a
                            recipe)</label
                        ><br /><br />

                        <input
                            v-model="formData.violation"
                            ref="violation"
                            type="checkbox"
                            id="violation"
                            name="violation"
                            value="violation"
                        />
                        <label for="violation"
                            >It violates community guidelines. (see community
                            guidelines
                            <a href="https://web.cookbookshq.com/#/usage-policy"
                                >here</a
                            >)</label
                        ><br /><br />

                        <input
                            v-model="formData.duplicate"
                            ref="duplicate"
                            type="checkbox"
                            id="duplicate"
                            name="duplicate"
                            value="duplicate"
                        />
                        <label for="duplicate">It is a duplicate.</label
                        ><br /><br />

                        <input
                            v-model="formData.plagiarism"
                            ref="plagiarism"
                            type="checkbox"
                            id="plagiarism"
                            name="plagiarism"
                            value="plagiarism"
                        />
                        <label for="plagiarism"
                            >It's plagiarism. The content originally belongs to
                            me or someone else.</label
                        ><br /><br />

                        <input
                            v-model="formData.somethingelse"
                            ref="somethingelse"
                            type="checkbox"
                            id="somethingelse"
                            name="somethingelse"
                            value="somethingelse"
                        />
                        <label for="somethingelse">It's something else.</label
                        ><br /><br />
                    </div>
                    <br />
                    <div>
                        <label for="additionalinfo"
                            >Additional info: (Optional)</label
                        >
                        <div class="field">
                            <textarea
                                ref="additionalinfo"
                                id="additionalinfo"
                                name="additionalinfo"
                                rows="4"
                                cols="50"
                            ></textarea>
                        </div>
                    </div>
                    <br />
                    <div>
                        <label for="emailorphone"
                            >Please provide your email or phone number:
                            (Required*)</label
                        >
                        <div class="field">
                            <input
                                type="text"
                                v-model="formData.email"
                                ref="emailorphone"
                                name="emailorphone"
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label for="verificationcode">We sent you a code</label>
                        <div class="field">
                            <input
                                type="text"
                                ref="verificationcode"
                                v-model="formData.verification_code"
                                name="verificationcode"
                            />
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <div class="ui small info message">
                            Our conflict resolution/hygiene team will reach out
                            to you if need be, within 10-28 business days.
                        </div>
                    </div>
                    <hr />
                    <div class="ui success message" v-if="report_success">
                        <i class="close icon"></i>
                        <div>Your report was submitted.</div>
                    </div>
                  
                    <div class="ui negative message" v-if="report_failed">
                        <i class="close icon"></i>
                        <div>Error sending report.</div>
                    </div>
                    <div class="">
                        <div class="ui input">
                            <button
                                class="ui tbb button"
                                v-bind:class="{ loading: is_loading }"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import store from "@/store";

export default {
    mounted() {
        this.$store.dispatch("reset_report_form");
    },
    computed: {
        is_loading() {
            return this.$store.state.modal_isLoading;
        },

        report_success() {
            return this.$store.state.subscriptionStore.report_success;
        },
        report_failed() {
            return this.$store.state.subscriptionStore.failed;
        },
    },

    data() {
        
        return {
            showModal: false,
            title: "Use this tool if you think this recipe is any of the following; inappropriate, unauthentic, not original, stolen or a duplicate.",
            formData: {
                email: "",
                nudity: false,
                irrelevant: false,
                violation: false,
                duplicate: false,
                plagiarism: false,
                something_else: false,
                additional_info: false,
                verification_code: "",
            },
            submitError: "",
        };
    },

    methods: {
        ReportIt() {
            this.resetForm();
            this.$store.dispatch("reset_report_form");
            $(".ui.modal").modal("show");
        },
        resetForm() {
            // Reset the form data after successful submission
            this.formData.inputField = "";
            (this.formData.email = ""),
                (this.formData.nudity = false),
                (this.formData.irrelevant = false),
                (this.formData.violation = false),
                (this.formData.duplicate = false),
                (this.formData.plagiarism = false),
                (this.formData.something_else = false),
                (this.formData.additional_info = false),
                (this.formData.verification_code = "");
        },

        postReport() {
            store.dispatch("submit_report", this.formData);
        },
    },
};
</script>

<style scoped>
/* CSS for the modal */
.ui.modal {
    background-color: #fff;
    padding: 40px;
    border-radius: 4px;
}

/* CSS for the header */
.ui.modal .header {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* CSS for the scrolling content */
.ui.modal .scrolling.content {
    overflow-y: auto;
}

/* CSS for the checkboxes and labels */
.ui.modal input[type="checkbox"] {
    margin-right: 5px;
}

.ui.modal label {
    font-weight: bold;
}

.field {
    padding-top: 20px !important;
}

/* CSS for the additional info textarea */
.ui.modal textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
}

/* CSS for the email/phone input */
.ui.modal input[type="text"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
}

/* CSS for the label and verification code input */
.ui.modal label[for="verificationcode"] {
    margin-top: 10px;
    display: block;
}

.ui.modal input[name="verificationcode"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
}

/* CSS for the conflict resolution label */
.ui.modal .ui.label {
    margin-top: 10px;
}

/* CSS for the submit button */
.ui.modal .ui.button {
    margin-top: 20px;
    background-color: #2185d0;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.ui.modal .ui.button:hover {
    background-color: #1678c2;
}

.message {
    margin-bottom: 20px !important;
}
</style>
