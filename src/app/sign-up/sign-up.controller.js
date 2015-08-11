(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('SignUpController', SignUpController);

  /** @ngInject */
  function SignUpController($interval, loginService) {
  	var signUpvm = this;
  	signUpvm.signup = function signUp(event) {
  		event.preventDefault();
  		if (signUpvm.username && signUpvm.email && signUpvm.password) {
  			loginService.signUp(signUpvm.username, signUpvm.email, signUpvm.password);
  		}
  		else {
  			console.log("no username && email && password provided")
  		}
  	}
  }
})();

