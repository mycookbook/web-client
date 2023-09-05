describe("Auth flow", () => {
    const baseUrl = 'http://localhost:5001'

    it("Navigate to login page", () => {
        cy
        .visit("/#/")
        .get('#signinBtn')
        .click()
        .url()
        .should("eq", baseUrl + "/#/signin");
    });

    it("Login with TikTok", () => {
        cy
        .visit("/#/signin")
        .get('#signinWithTikTokBtn')
        .click()
        .url()
        .should("eq", baseUrl + "//#/?v=fu");
    });

    it("Only authenticated users can view the dashboard", () => {
        cy
        .visit("/#/dashboard?tab=Recipes")
        .url()
        .should("eq", baseUrl + "/#/signin");
    });
});
