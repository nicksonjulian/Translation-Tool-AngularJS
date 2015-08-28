'use strict';

var SignInPage = require('./sign-in.po');

describe('Sign In view', function() {

    var page;

	beforeEach(function() {
        browser.get('/#/sign-in');
        page = new SignInPage();
	});

	it('should test', function() {
		expect('String').toBe('String');
	});

	it('login should be successful', function() {
		page.signIn('jigong123', 'jigong123');
		page.signInButton.click();
		browser.sleep(3000);
		//expect(page.failLogin.isDisplayed()).toBeFalsy();
		//expect(page.failMessage.getText()).toEqual("");
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/landing/jigong123');
	});

	it('login should fail', function() {
		page.signIn('notexist', 'notexist');
		page.signInButton.click();
		browser.sleep(1000);
		page.signInButton.click();
		browser.sleep(5000);
		//expect(page.failLogin.isDisplayed()).toBeTruthy();
		expect(page.failMessage.getText()).toEqual("invalid login parameters");
	});

	it('login should fail with no username and email provided', function() {
		page.signInButton.click();
		browser.sleep(1000);
		//expect(page.failLogin.isDisplayed()).toBeTruthy();
		expect(page.failMessage.getText()).toEqual("no email && password provided");
	});
});