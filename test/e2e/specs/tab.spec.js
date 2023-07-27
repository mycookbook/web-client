module.exports = {
  "@tags": ["tabs"],
  'Should toggle between "For You" and "Following" tabs': function (browser) {
    browser
      .url(`${process.env.VUE_APP_APP_URL}#/?v=fu`)
      .waitForElementVisible(".ui.container", 5000)
      .assert.visible(".ui.header a#foryou")
      .assert.hidden(".ui.header a#following")
      .click(".ui.header a#following")
      .assert.hidden(".ui.header a#foryou")
      .assert.visible(".ui.header a#following")
      .click(".ui.header a#foryou")
      .assert.visible(".ui.header a#foryou")
      .assert.hidden(".ui.header a#following")
      .end();
  },
};
