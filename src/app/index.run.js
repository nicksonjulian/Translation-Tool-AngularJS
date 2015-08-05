(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope,$state) {
  	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    	if (toState.redirectTo) {
    		console.log("BAU");
    		event.preventDefault(); 
    		$state.go(toState.redirectTo, toParams);
    	}
    
	});
    $log.debug('runBlock end');
  }

})();
