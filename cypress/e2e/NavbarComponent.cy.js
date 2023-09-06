describe("Expected behavior when user is not authenticated", () => {
    it("Displays the correct Nav Menu Items", () => {
        cy.visit("/#");

        const routes = [
            '/#/signin',
            '/#/usage-policy',
            '/#/cookie-policy',
            '/#/data-retention-policy',
            '/#/terms-and-conditions',
            '/#/privacy-policy',
            '/#/marketplace',
            '/#/search?q=example query',
            '/#/errors?m=example error message from server',
            '/#/help?doc=query-syntax',
            '/#/help?doc=faqs',
            '/#/help?doc=templates',
            '/#/cookbooks/example-slug',
            '/#/recipes/example-slug',
            '/#/contributors/example-slug'
        ];

        routes.map(function(route) {
            // brand logo
            cy.get('img');
            cy.should('have.attr', 'src', '/static/transparent_logo.png');
            cy.should('have.attr', 'alt', 'cookbookinc brand logo');
            cy.should('have.attr', 'class', 'logo');

            // marketplace
            cy.get('#marketplaceNavBtn');
            cy.should('have.attr', 'title', 'Coming soon.');
            cy.should('have.attr', 'href', '/#/marketplace');
            cy.contains('Go to Marketplace');

            // sigin link
            cy.get('#signinBtn');
            cy.contains('Sign in To Contribute');
        });
    });
});

describe("Expected behavior when user is authenticated", () => {
    it("Displays the correct Nav Menu Items", () => {
        cy.visit("/#/signin").get("#signinWithTikTokBtn").trigger("click");

        const routes = [
            '/#/usage-policy',
            '/#/cookie-policy',
            '/#/data-retention-policy',
            '/#/terms-and-conditions',
            '/#/privacy-policy',
            '/#/marketplace',
            '/#/search?q=example query',
            '/#/errors?m=example error message from server',
            '/#/help?doc=query-syntax',
            '/#/help?doc=faqs',
            '/#/help?doc=templates',
            '/#/cookbooks/example-slug',
            '/#/recipes/example-slug',
            '/#/contributors/example-slug'
        ];

        routes.map(function(route) {
            cy.visit(route);

            // brand logo
            cy.get('img');
            cy.should('have.attr', 'src', '/static/transparent_logo.png');
            cy.should('have.attr', 'alt', 'cookbookinc brand logo');
            cy.should('have.attr', 'class', 'logo');

            // marketplace
            cy.get('#marketplaceNavBtn');
            cy.should('have.attr', 'title', 'Coming soon.');
            cy.should('have.attr', 'href', '/#/marketplace');
            cy.contains('Go to Marketplace');

            //logout link
            cy.get('#logoutBtn');
            cy.contains('Logout');

            // Dashboard btn
            cy.get('#dashboardBtn');
            cy.contains('My Dashboard');
        });
    });
});
