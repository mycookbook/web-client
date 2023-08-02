module.exports = {
  "FetchRecipe  Test": function (browser) {
    browser
      .url(`http://localhost:5001/#/`)
      .waitForElementVisible(".ui.container", 1000000)
      .waitForElementVisible(".content", 1000000)
      .elements("css selector", ".content", function (result) {
        const cookbookElements = result.value;

        cookbookElements.forEach(function (element, index) {
          const cookbookSelector = `.content:nth-of-type(${index + 1})`.getText(
            `${cookbookSelector} .ui.medium.header.cookbook-title`,
            function (nameResult) {
              const cookbookName = nameResult.value.assert
                .ok(
                  cookbookName.trim().length > 0,
                  "Cookbook name should not be empty."
                )

                .getText(
                  `${cookbookSelector} .ui.labels .ui.tiny.label`,
                  function (categoriesResult) {
                    const categoriesText = categoriesResult.value;
                    const categories = categoriesText
                      .map((text) => text.trim())
                      .assert.ok(
                        categories.length > 0,
                        "Cookbook should have at least one category."
                      );
                  }
                );
            }
          );
        });
      })
      .end();
  },
};
