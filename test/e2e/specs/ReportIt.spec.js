module.exports = {
    "ReportIt Component Test": function (browser) {
        browser
            .url(`${process.env.VUE_APP_APP_URL}#/recipes/egusi-soup`)
            .waitForElementVisible(".six.wide.computer.column.sixteen.wide.mobile.column", 15000)
            .waitForElementVisible(".ui.red.fluid.button", 9000000)
            .click(".ui.red.fluid.button")
            .waitForElementVisible(".ui.modal", 5000)
            .setValue('input[name="emailorphone"]', "test@example.com")
            .click('input[name="nudity"]')
            .click('input[name="irrelevant"]')
            .click('input[name="violation"]')
            .click('input[name="duplicate"]')
            .click('input[name="plagiarism"]')
            .click('input[name="somethingelse"]')
            .setValue(
                'textarea[name="additionalinfo"]',
                "Additional information",
            )
            .click("button.ui.tbb.button")
            .waitForElementVisible(".ui.success.message", 9000000)
            .assert.containsText(
                ".ui.success.message",
                "Your report was submitted.",
            )
            .end();
    },
};
