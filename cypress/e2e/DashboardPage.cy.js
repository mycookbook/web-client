describe("Dashboard Component", () => {
    const baseUrl = 'http://localhost:5001'

    it("See LeftNav menu items", () => {
        cy
            .visit("/#/signin")
            .get('#signinWithTikTokBtn')
            .trigger("click")

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Advanced Search');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('My Recipes');
        
        cy.visit(baseUrl + "//#/?v=fu")
            .contains('My Drafts');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Preferences');
        
        cy.visit(baseUrl + "//#/?v=fu")
            .contains('My Profile');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Notifications');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Privacy Settings');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Display Settings');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Redeem My Points');
        
        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Payments & Billing');
        
        cy.visit(baseUrl + "//#/?v=fu")
            .contains('For You');

        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Following');
        
        cy.visit(baseUrl + "//#/?v=fu")
            .contains('Who to follow');
    });

    // it("Show My Recipes Page", () => {
    //     cy
    //         .visit("/#/signin")
    //         .get('#signinWithTikTokBtn')
    //         .trigger("click");

    //     cy.visit(baseUrl + "/#/dashboard?tab=Recipes")
    //         .contains('add new recipe');
    // });

    // it("Can Create a new recipe", () => {});
    // it("Can Update an existing recipe", () => {});
});
