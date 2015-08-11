(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($interval, FEATURE_LIST, parseService, loginService) {
    var vm = this;
  	vm.currfeature = 0;
  	vm.descriptions = ["Feature1","Feature2","Feature3"];
    vm.FEATURE_LIST = FEATURE_LIST;

  	var intervalchange = function() {
  		if (vm.currfeature === 2) {
  			vm.currfeature = 0;
      }
  		else {
  			vm.currfeature += 1;
      }
  	};

  	var promise = $interval(intervalchange, 5000);  	

  	vm.changel = function(event){
  		event.preventDefault();
  		$interval.cancel(promise);
  		if (vm.currfeature === 0) {
  			vm.currfeature = 2;
      }
  		else {
	  		vm.currfeature = vm.currfeature - 1;
      }
	  	promise = $interval(intervalchange, 5000);
  	};

  	vm.changer = function(event){
  		event.preventDefault();
  		$interval.cancel(promise);
  		if (vm.currfeature === 2) {
  			vm.currfeature = 0;
      }
  		else {
  			vm.currfeature += 1;
      }
  		promise = $interval(intervalchange, 5000);
  	};

  	vm.changefeature = function(event, id){
  		event.preventDefault();
  		$interval.cancel(promise);
  		vm.currfeature = id;
  		promise = $interval(intervalchange, 5000);
  	};

    vm.logout = function(event){
      event.preventDefault();
      loginService.logOut();
    }

    // parseService.createData("aku", "I");
    // parseService.getData("L9PtRWiK6X");

  }
})();

