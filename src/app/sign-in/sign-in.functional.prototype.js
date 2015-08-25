'use strict';

var signInPage = function () {
  browser.get();
};

signInPage.prototype  = Object.create({}, {
  usernameField:
  {
    get: function() {
      return element(by.model('signInvm.username'));
    }
  },

  passwordField:
  {
    get: function() {
      return element(by.model('signInvm.password'));
    }
  },

  signInButton:
  {
    get: function() {
      return element(by.css('.md-button'));
    }
  },

  signIn:
  {
    value: function(username, password) {
      this.usernameField.sendKeys(username);
      this.passwordField.sendKeys(password);
      this.signInButton.click();
    }
  },

  failMessage:
  {
    get: function() {
      return element(by.binding('vm.failmessage')).getText();
    }
  }

});