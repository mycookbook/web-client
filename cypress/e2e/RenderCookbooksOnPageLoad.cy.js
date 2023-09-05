describe("landing Page Component", () => {
    it("renders cookbook cards with categories", () => {
        cy.visit("/#");

        // Wait for the component to load and render
        cy.get(".meal.section .content .serving.card").should(
            "have.length.gt",
            0,
        );

        // Check that each cookbook has at least one category label
        cy.get(".meal.section .content .serving.card").each((cookbookCard) => {
            cy.wrap(cookbookCard)
                .find(".ui.labels .ui.tiny.label")
                .should("have.length.gt", 0);
        });
    });
});
