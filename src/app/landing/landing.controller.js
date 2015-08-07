(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($interval, feature_list) {
    var vm = this;
  	vm.currfeature = 0;
  	vm.descriptions = ["Feature1","Feature2","Feature3"];
    vm.featurearr = feature_list;

  	vm.intervalchange = function(){
  		if (vm.currfeature == 2)
  			vm.currfeature = 0;
  		else
  			vm.currfeature += 1;
  	}

  	vm.promise = $interval(vm.intervalchange, 5000);  	

  	vm.changel = function(event){
  		event.preventDefault();
  		$interval.cancel(vm.promise);
  		if (vm.currfeature == 0)
  			vm.currfeature = 2;
  		else
	  		vm.currfeature = vm.currfeature - 1;
	  	vm.promise = $interval(vm.intervalchange, 5000);
  	};

  	vm.changer = function(event){
  		event.preventDefault();
  		$interval.cancel(vm.promise);
  		if (vm.currfeature == 2)
  			vm.currfeature = 0;
  		else
  			vm.currfeature += 1;
  		vm.promise = $interval(vm.intervalchange, 5000);
  	};

  	vm.changefeature = function(event, id){
  		event.preventDefault();
  		$interval.cancel(vm.promise);
  		vm.currfeature = id;
  		vm.promise = $interval(vm.intervalchange, 5000);
  	};
  }
})();

