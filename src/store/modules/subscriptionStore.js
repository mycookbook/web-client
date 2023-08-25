export const subscriptionStore = {
    state: () => ({
        success: false,
        report_success: false,
        otp_success: false,
        otp_failed: false,
        failed: false,
    }),
    mutations: {
        SET_CONTACT_FORM_ERRORS(state, errObj) {
            if (errObj.email !== undefined) {
                this.state.form_errors.contact_form.email = errObj.email;
            }
        },
        RESET_CONTACT_FORM(state) {
            this.state.form_errors.contact_form = {};
            state.success = false;
        },
        SHOW_SUCCESS_MESSAGE(state) {
            state.success = true;
        },
        RESET_REPORT_FORM(state) {
            state.report_success = false;
            state.failed = false;
            state.otp_success = false;
            state.otp_failed = false;
        },
        SHOW_REPORT_SUCCESS_MESSAGE(state) {
            state.report_success = true;
        },
        SHOW_OTP_SUCCESS_MESSAGE(state) {
            state.otp_success = true;
        },
        SHOW_FAILED_MESSAGE(state) {
            state.failed = true;
        },
        SHOW_FAILED_OTP(state) {
            state.otp_failed = true;
        },
    },
    actions: {
        async subscribeUser(context, payload) {
            context.commit("SET_LOADING_STATE", true);
            context.commit("RESET_CONTACT_FORM");

            const url = process.env.BASE_URL + "subscriptions";

            await this.state.api.client
                .post(
                    url,
                    {
                        email: payload,
                    },
                    this.state.api.options,
                )
                .then(function (response) {
                    context.commit("SHOW_SUCCESS_MESSAGE");
                    context.commit("SET_LOADING_STATE", false);
                })
                .catch(function (error) {
                    context.commit("SET_LOADING_STATE", false);
                    context.commit(
                        "SET_CONTACT_FORM_ERRORS",
                        error.response.data,
                    );
                });
        },
        reset_contact_form(context) {
            context.commit("RESET_CONTACT_FORM");
        },
        submit_report(context, payload) {
            context.commit("SET_MODAL_STATE", true);
            context.commit("RESET_REPORT_FORM");

            const url = process.env.BASE_URL + "report-recipe";

            this.state.api.client
                .post(
                    url,
                    {
                        payload,
                    },
                    this.state.api.options,
                    {
                        headers: {
                            Authorization: `Bearer ${this.state.access_token}`,
                        },
                    },
                )
                .then((response) => {
                    context.commit("SET_MODAL_STATE", false);
                    context.commit("SHOW_REPORT_SUCCESS_MESSAGE");
                })
                .catch((error) => {
                    context.commit("SET_MODAL_STATE", false);
                    context.commit("SHOW_FAILED_MESSAGE");
                    context.commit("HANDLE_ERROR", error.response);
                });
        },
        submit_report_otp(context, payload) {
            context.commit("SET_MODAL_STATE", true);

            const url = process.env.BASE_URL + "otp"; //not actual endpoint

            this.state.api.client
                .post(
                    url,
                    {
                        payload,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${this.state.access_token}`,
                        },
                    },
                )
                .then((response) => {
                    context.commit("SET_MODAL_STATE", false);
                    context.commit("SHOW_OTP_SUCCESS_MESSAGE");
                })
                .catch((error) => {
                    context.commit("SET_MODAL_STATE", false);
                    context.commit("SHOW_FAILED_OTP");
                    context.commit("HANDLE_ERROR", error.response);
                });
        },
        reset_report_form(context) {
            context.commit("RESET_REPORT_FORM");
        },
    },
};
