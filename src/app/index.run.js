(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
