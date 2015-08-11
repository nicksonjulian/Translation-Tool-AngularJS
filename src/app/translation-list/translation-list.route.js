(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('translation-list', {
        url: '/translation-list',
        templateUrl: 'app/translation-list/translation-list.html',
        controller: 'TranslationListController',
        controllerAs: 'translation-list'
      });  
  }



})();
