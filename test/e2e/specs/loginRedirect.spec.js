module.exports = {
    'Test login and redirect': function (browser) {
      const redirectPath = `${process.env.VUE_APP_APP_URL}#/`; 
  
      browser
      .url(`${process.env.VUE_APP_APP_URL}#/`)
        .waitForElementVisible('#home', 5000) 
        .click('a[href="/#/signin"]') 
        .waitForElementVisible('#register-page', 5000) 
        .click(".ui.large.black.button")
        .assert.urlEquals(redirectPath) 
        .end();
    },
  };