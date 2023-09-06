describe("Navigation component", () => {
    const baseUrl = 'http://localhost:5001'

    it("Displays the brand logo", () => {
        cy.visit("/#");
        cy.get('img')
        .should('have.attr', 'src', '/static/transparent_logo.png')
        .should('have.attr', 'alt', 'cookbookinc brand logo')
        .should('have.attr', 'class', 'logo')
    });
});
