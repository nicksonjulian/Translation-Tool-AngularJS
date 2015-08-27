'use strict';

var SignInPage = function() {
    this.usernameField = element(by.model('signInvm.username')),
    this.passwordField = element(by.model('signInvm.password')),
    this.signInButton = element(by.css('.md-button')),
    this.failMessage = element(by.binding('vm.failmessage')).getText(),
    this.signIn = function(username, password) {
        this.usernameField.sendKeys(username);
        this.passwordField.sendKeys(password);
        this.signInButton.click();
    }
};

module.exports = new SignInPage();