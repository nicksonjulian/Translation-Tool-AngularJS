(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($scope, $interval, feature_list) {
  	$scope.currfeature = 0;
  	$scope.descriptions = ["Feature1","Feature2","Feature3"];
    $scope.features = feature_list;

  	$scope.intervalchange = function(){
  		if ($scope.currfeature == 2)
  			$scope.currfeature = 0;
  		else
  			$scope.currfeature += 1;
  	}

  	$scope.promise = $interval($scope.intervalchange, 5000);  	

  	$scope.changel = function(event){
  		event.preventDefault();
  		$interval.cancel($scope.promise);
  		if ($scope.currfeature == 0)
  			$scope.currfeature = 2;
  		else
	  		$scope.currfeature = $scope.currfeature - 1;
	  	$scope.promise = $interval($scope.intervalchange, 5000);
  	};

  	$scope.changer = function(event){
  		event.preventDefault();
  		$interval.cancel($scope.promise);
  		if ($scope.currfeature == 2)
  			$scope.currfeature = 0;
  		else
  			$scope.currfeature += 1;
  		$scope.promise = $interval($scope.intervalchange, 5000);
  	};

  	$scope.changefeature = function(event, id){
  		event.preventDefault();
  		$interval.cancel($scope.promise);
  		$scope.currfeature = id;
  		$scope.promise = $interval($scope.intervalchange, 5000);
  	};
  }
})();

