'use strict';

describe('Sign In view', function() {

    var page;

	beforeEach(function() {
        browser.get('/#/sign-in');
        page = require('./sign-in.po');
	});

	it('should test', function() {
		expect('String').toBe('String');
	});

	it('login should be successful', function() {
		page.signIn('jigong123', 'jigong123');
		expect(page.failMessage).toEqual("");
	});

	it('login should fail', function() {
		page.signIn('notexist', 'notexist');
		expect(page.failMessage).toEqual("invalid login parameters");
	});

	it('login should fail with no username and email provided', function() {
		page.signIn(null, null);
		expect(page.failMessage).toEqual("no email && password provided!");
	});
});