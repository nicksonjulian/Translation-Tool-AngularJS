(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .controller('TranslationListDetailController', TranslationListDetailController);


    /** @ngInject */
    function TranslationListDetailController(parseService) {
    	var vm = this;
    	vm.alldatas = parseService.getAllData();
        vm.capitalize = capitalize;
        vm.editTrans = editTrans;
        vm.saveTrans = saveTrans;
        vm.disabledEditor = disabledEditor;

    	vm.alldatas.find({
            success: function(results) {
                vm.translations = results;
                console.log(results);
                for (var i=0; i<results.length; ++i) {
                    vm.translations[i].editorEnabled = false;
                    console.log(results[i]._serverData.v1);
                }
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });





        ///////////////////////////


        function editTrans(event, index) {
            event.preventDefault();
            vm.translations[index].editorEnabled = true;
            console.log("enteredit");
        }

        function saveTrans(index) {
            console.log(vm.translations[index]._serverData.v1);
            console.log(vm.translations[index].id);
            parseService.setData(vm.translations[index].id, vm.translations[index]._serverData.v1, vm.translations[index]._serverData.v2);
            vm.translations[index].editorEnabled = false;
        }

        function disabledEditor(index) {
            vm.translations[index].editorEnabled = false;
        }

        function capitalize(string) {
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

