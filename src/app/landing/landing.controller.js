(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($interval, FEATURE_LIST, loginService, parseService, $state) {
    var vm = this;
  	vm.currfeature = 0;
  	vm.descriptions = ["Feature1","Feature2","Feature3"];
    vm.FEATURE_LIST = FEATURE_LIST;
    vm.currentUsername = loginService.getCurrentUser();
    vm.hasUser = loginService.getCurrentUser() ? true : false;
    vm.displayMeaning = displayMeaning;

  	var intervalchange = function() {
  		if (vm.currfeature === 2) {
  			vm.currfeature = 0;
      }
  		else {
  			vm.currfeature += 1;
      }
  	};

  	var promise = $interval(intervalchange, 5000);  	

  	vm.changel = function(event) {
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

  	vm.changer = function(event) {
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

  	vm.changefeature = function(event, id) {
  		event.preventDefault();
  		$interval.cancel(promise);
  		vm.currfeature = id;
  		promise = $interval(intervalchange, 5000);
  	};

    vm.logout = function(event) {
      event.preventDefault();
      loginService.logOut();
      $state.go("landing", {}, {reload: true});

    }



    //////////

    function displayMeaning() {
      var query = parseService.getMeaning(vm.wordinput);
      query.find({
        success: function(results) {
          vm.theword = "";
          vm.meaning = "";
          vm.theword = vm.wordinput;
          vm.meaning += "->";
          for (var i = 0; i < results.length; i++) {
            vm.meaning += " ";
            vm.meaning += results[i].get("v2");
            console.log(vm.meaning);
          }
        },
        error: function(error) {
          console.log("fail");
          vm.meaning += "word is not found";
        }
      });


    }

    // parseService.createData("aku", "I");
    // parseService.getData("L9PtRWiK6X");

  }
})();

