(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'app/sign-in/sign-in.html',
        controller: 'SignInController',
        controllerAs: 'sign-in'
      });  
  }



})();
