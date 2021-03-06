module.exports = {
  touch: function (browser) {
    browser
      .url('http://localhost:8080/examples/touch/')
      // initial loaded
      .waitForElementVisible('#app', 1000)
      .waitForElementNotPresent('.errors .required', 1000)
      .waitForElementNotPresent('.errors .minlength', 1000)
      // minlength invalid
      .setValue('input', 'foo')
      .trigger('input', 'input')
      .waitForElementNotPresent('.errors .required', 1000)
      .waitForElementPresent('.errors .minlength', 1000)
      // and required invalid
      .clearValue('input')
      .trigger('input', 'input')
      .waitForElementPresent('.errors .required', 1000)
      .waitForElementPresent('.errors .minlength', 1000)
      // valid !!
      .setValue('input', 'kazupon')
      .trigger('input', 'input')
      .waitForElementNotPresent('.errors .required', 1000)
      .waitForElementNotPresent('.errors .minlength', 1000)
      // manully touch
      .moveToElement('.errors', 5, 5).mouseButtonClick() // focusout
      .waitForElementPresent('.touch', 1000)
      .end()
  }
}
