(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingController',
        controllerAs: 'landing'
      })
      .state('landing.userLogged', {
        url: '/:username',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingControllerUser'

      });
  }



})();
