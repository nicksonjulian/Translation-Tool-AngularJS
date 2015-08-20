(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .controller('TranslationListDetailController', TranslationListDetailController);


    /** @ngInject */
    function TranslationListDetailController(parseUserService, loginService, $state) {
    	var vm = this;
    	vm.alldatas = parseUserService.getAllData(loginService.getCurrentUser());
        vm.editTrans = editTrans;
        vm.saveTrans = saveTrans;
        vm.disabledEditor = disabledEditor;
        vm.addTrans = addTrans;
        vm.delTrans = delTrans;
        vm.capitalize = capitalize;

    	vm.alldatas.find({
            success: function(results) {
                vm.translations = results;
                console.log(results);
                for (var i=0; i<results.length; ++i) {
                    vm.translations[i].editorEnabled = false;
                }
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });

        // useless a = a;

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
            $state.go("translationList.detail", {}, {reload: true});
        }

        function delTrans(index) {
            if (confirm("Do you really want to delete this translation?") == true) {
                parseUserService.deleteData(vm.translations[index].id);
            }
        }

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

})();

