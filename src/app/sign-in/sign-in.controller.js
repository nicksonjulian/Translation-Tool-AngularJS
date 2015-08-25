(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('SignInController', SignInController);

  /** @ngInject */
  function SignInController(loginService, $state) {
  	var vm = this;
    vm.faillogin = false;
    vm.failmessage = "";
  	vm.logIn = function logIn(event) {
  		event.preventDefault();
  		if (vm.username && vm.password) {
        loginService.logIn(vm.username, vm.password).then(
          function() {
            vm.failmessage = "";
            vm.faillogin = false;
            $state.go("landing.userLogged", {"username": vm.username});
          },
          function(error) {
            vm.faillogin = true;
            vm.failmessage = error.message;
            console.error(error.message);

          }
        );
  			// if (loginService.logIn(vm.username, vm.password) === true) {
     //      console.log("yes, its true");
     //      $state.go("landing/vm.username({ username: vm.username })");
     //    }
  		}
  		else {
        vm.faillogin = true;
        vm.failmessage = "no email && password provided";
  			console.log("no email && password provided!")
  		}
  	}
  }
})();

