(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingController',
        controllerAs: 'landing',
      })
    $urlRouterProvider.otherwise('/');

    
  }



})();
