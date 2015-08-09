(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($interval, feature_list, parseData) {
    Parse.initialize("feb37edoK2V51h0k5Vefnf5rrMIP7wYZgLfjnwqo","PHp0oirB0WnG110mHqqp2pyXBcV6kB61t1h9qPGW");

    var vm = this;
  	vm.currfeature = 0;
  	vm.descriptions = ["Feature1","Feature2","Feature3"];
    vm.featurearr = feature_list;

  	var intervalchange = function(){
  		if (vm.currfeature == 2)
  			vm.currfeature = 0;
  		else
  			vm.currfeature += 1;
  	}

  	var promise = $interval(intervalchange, 5000);  	

  	vm.changel = function(event){
  		event.preventDefault();
  		$interval.cancel(promise);
  		if (vm.currfeature == 0)
  			vm.currfeature = 2;
  		else
	  		vm.currfeature = vm.currfeature - 1;
	  	promise = $interval(intervalchange, 5000);
  	};

  	vm.changer = function(event){
  		event.preventDefault();
  		$interval.cancel(promise);
  		if (vm.currfeature == 2)
  			vm.currfeature = 0;
  		else
  			vm.currfeature += 1;
  		promise = $interval(intervalchange, 5000);
  	};

  	vm.changefeature = function(event, id){
  		event.preventDefault();
  		$interval.cancel(promise);
  		vm.currfeature = id;
  		promise = $interval(intervalchange, 5000);
  	};
  }
})();

