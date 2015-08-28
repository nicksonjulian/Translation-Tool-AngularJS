'use strict';

function SignInPage() {
    this.usernameField = element(by.model('vm.username')),
    this.passwordField = element(by.model('vm.password')),
    this.signInButton = element(by.css('[ng-click="vm.logIn($event)"]')),
    this.failMessage = element(by.binding('vm.failmessage')),
    this.failLogin = element(by.css('[ng-show="vm.faillogin"].errormessage')),
    this.signIn = function(username, password) {
        this.usernameField.sendKeys(username);
        this.passwordField.sendKeys(password);
    }
}

module.exports = SignInPage;