(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('SignInController', SignInController);

  /** @ngInject */
  function SignInController($interval, loginService, $state) {
  	var signInvm = this;
  	signInvm.login = function login(event) {
  		event.preventDefault();
  		if (signInvm.username && signInvm.password) {
  			if (loginService.logIn(signInvm.username, signInvm.password) === true) {
          console.log("yes, its true");
          $state.go("landing/signInvm.username({ username: signInvm.username })");
        }
   

  		}
  		else {
  			console.log("no email && password provided")
  		}
  	}
  }
})();

