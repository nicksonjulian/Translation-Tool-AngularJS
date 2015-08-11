(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    }

})();
