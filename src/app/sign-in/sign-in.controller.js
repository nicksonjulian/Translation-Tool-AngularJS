(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('SignInController', SignInController);

  /** @ngInject */
  function SignInController($interval, loginService) {
  	var signInvm = this;
  	signInvm.login = function login(event) {
  		event.preventDefault();
  		if (signInvm.username && signInvm.password) {
  			console.log("jig " + signInvm.username + " "  + signInvm.password )
  			loginService.logIn(signInvm.username, signInvm.password);
  		}
  		else {
  			console.log("no email && password provided")
  		}
  	}
  }
})();

