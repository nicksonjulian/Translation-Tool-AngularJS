(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .filter('containWordFilter', containWord);


        /** @ngInject */
        function containWord() {
        	return function (items, word) {
        		var filtered = [];
        		for (var i = 0;i < items.length; i++) {
        			var item = items[i];
        			if (item.get("v1") === word) {
        				filtered.push(item);
        			}
        		}
        	}
        	return filtered;
        };
})();