(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('LandingController', ['$scope','$interval', LandingController]);

  /** @ngInject */
  function LandingController($scope, $interval) {
  	$scope.currfeature = 0;
  	$scope.descriptions = ["Feature1","Feature2","Feature3"];
  	$scope.features =[
  	{
  		id:0,
  		title: "FEATURE1",
  		description: "feature1 desc",
  		imgsrc: "app/landing/assets/dog.jpg"
  	},
  	{
  		id:1,
  		title: "FEATURE2",
  		description: "feature2 desc",
  		imgsrc: "app/landing/assets/cat.jpg"
  	},
  	{
  		id:2,
  		title: "FEATURE3",
  		description: "feature3 desc",
  		imgsrc: "app/landing/assets/bird.jpg"
  	}];

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

  	$scope.changea = function(event, id){
  		event.preventDefault();
  		$interval.cancel($scope.promise);
  		$scope.currfeature = id;
  		$scope.promise = $interval($scope.intervalchange, 5000);
  	};
  }
})();

