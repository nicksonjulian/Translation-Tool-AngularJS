(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .controller('TranslationListController', TranslationListController);

    /** @ngInject */
    function TranslationListController(
        $scope

    ) {
        var vm = this;
        vm.listshown = false;

    }
})();

