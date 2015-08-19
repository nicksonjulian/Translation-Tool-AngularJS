(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .controller('TranslationListDetailController', TranslationListDetailController);


    /** @ngInject */
    function TranslationListDetailController(parseUserService, loginService) {
    	var vm = this;
    	vm.alldatas = parseUserService.getAllData(loginService.getCurrentUser());
        vm.editTrans = editTrans;
        vm.saveTrans = saveTrans;
        vm.disabledEditor = disabledEditor;
        vm.addTrans = addTrans;
        vm.delTrans = delTrans;

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

        vm.searchList = vm.searchList;




        ///////////////////////////


        function editTrans(index) {
            vm.translations[index].editorEnabled = true;
            console.log("enteredit");
        }

        function saveTrans(index) {
            console.log(vm.translations[index]._serverData.v1);
            console.log(vm.translations[index].id);
            parseUserService.setData(vm.translations[index].id, vm.translations[index]._serverData.v1, vm.translations[index]._serverData.v2);
            vm.translations[index].editorEnabled = false;
        }

        function disabledEditor(index) {
            vm.translations[index].editorEnabled = false;
        }

        function addTrans() {
            console.log("the current user " + loginService.currentUsername);
            parseUserService.createData(vm.capitalize(vm.newWord1), vm.capitalize(vm.newWord2), loginService.currentUsername);
            vm.newWord1 = "";
            vm.newWord2 = "";
        }

        function delTrans(index) {
            if (confirm("Do you really want to delete this translation?") == true) {
                parseUserService.deleteData(vm.translations[index].id);
            }
        }



    	//console.log(JSON.stringify(vm.alldatas));
    	//console.log(JSON.stringify(parseUserService.getAllData()));
    }

})();

