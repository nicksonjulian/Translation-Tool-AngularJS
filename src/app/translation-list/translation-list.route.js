(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state(
            'translationList', {
                url: '/translation-list',
                templateUrl: 'app/translation-list/translation-list.html',
                controller: 'TranslationListController',
                controllerAs: 'translation-list'
            }
        )
            .state(
            'translationList.detail', {
                url: '/:translationId',
                views: {
                    section: {
                        templateUrl: 'app/translation-list/translation-list.detail/translation-list.detail.html'
                    }
                },
                controller: 'TranslationListDetailController'
            }
        );
    }


})();
