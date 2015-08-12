(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .controller('TranslationListDetailController', TranslationListDetailController);


    //TranslationListDetailController.$inject = ['parseService'];

    /** @ngInject */
    function TranslationListDetailController(parseService) {
    	var vm = this;
    	vm.alldatas = parseService.getAllData();
    	vm.alldatas.find({
            success: function(results) {
                //alert("Successfully retrieved " + results.length + " Datas.");
                vm.allTranslations = results;
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });

        vm.capitalize = function(string) {
        	if (string.length > 1) {
		    	return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
		    } else if (string.length === 1) {
		    	return string;
		    }
		}


    	//console.log(JSON.stringify(vm.alldatas));
    	//console.log(JSON.stringify(parseService.getAllData()));
    }
})();

