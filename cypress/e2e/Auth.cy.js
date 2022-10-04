describe("Auth flow", () => {
    let baseUrl = 'http://localhost:5001'

    if (process.env.NODE_ENV !== 'development') {
        baseUrl = 'https://cookbookshq-staging-web.herokuapp.com'
    }

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
