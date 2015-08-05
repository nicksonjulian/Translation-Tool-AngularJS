(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {
  	
    $log.debug('runBlock end');
  }

})();
