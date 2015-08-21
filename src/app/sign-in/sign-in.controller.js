(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('SignInController', SignInController);

  /** @ngInject */
  function SignInController(loginService, $state) {
  	var vm = this;
  	vm.logIn = function logIn(event) {
  		event.preventDefault();
  		if (vm.username && vm.password) {
        loginService.logIn(vm.username, vm.password).then(
          function() {
            $state.go("landing.userLogged", {"username": vm.username});
          },
          function(error) {
            console.error('error!');
          }
        );
  			// if (loginService.logIn(vm.username, vm.password) === true) {
     //      console.log("yes, its true");
     //      $state.go("landing/vm.username({ username: vm.username })");
     //    }
  		}
  		else {
  			console.log("no email && password provided")
  		}
  	}
  }
})();

