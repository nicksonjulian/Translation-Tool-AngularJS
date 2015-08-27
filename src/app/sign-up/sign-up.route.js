(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'app/sign-up/sign-up.html',
        controller: 'SignUpController',
        controllerAs: 'sign-up'
      });  
  }



})();
