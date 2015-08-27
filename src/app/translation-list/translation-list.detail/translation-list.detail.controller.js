(function () {
    'use strict';

    angular
        .module('translationToolAngularJs')
        .controller('TranslationListDetailController', TranslationListDetailController);


    /** @ngInject */
    function TranslationListDetailController(parseUserService, loginService, $state) {
    	var vm = this;
        var displaydata = 5;
    	vm.alldatas = parseUserService.getAllData(loginService.getCurrentUser());
        vm.currenttransnav = 0;
        vm.dataper10 = [];
        
        vm.editTrans = editTrans;
        vm.saveTrans = saveTrans;
        vm.disabledEditor = disabledEditor;
        vm.addTrans = addTrans;
        vm.delTrans = delTrans;
        vm.capitalize = capitalize;
        vm.changenavtrans = changenavtrans;

    	vm.alldatas.find({
            success: function(results) {
                vm.translations = results;
                var per10 = Math.floor(results.length / displaydata); 
                console.log(per10);
                for (var i = 0; i <= per10; ++i) {
                    vm.dataper10[i] = i + 1;
                }
                console.log(results);
                for (var i=0; i < results.length; ++i) {
                    vm.translations[i].editorEnabled = false;
                }
                vm.displayeddata = vm.translations.slice(vm.currenttransnav * displaydata, vm.currenttransnav * displaydata + 5);
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
            parseUserService.setData(vm.translations[index].id, vm.translations[index]._serverData.v1, vm.translations[index]._serverData.v2);
            vm.translations[index].editorEnabled = false;
        }

        function disabledEditor(index) {
            vm.translations[index].editorEnabled = false;
        }

        function addTrans() {
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
            if (string.length > 0)
                return string.charAt(0).toUpperCase() + string.slice(1);
            return undefined;
        }

        function changenavtrans(value) {
            console.log("navigate to " + value);
            vm.currenttransnav = value;
            vm.displayeddata = vm.translations.slice(vm.currenttransnav * displaydata, vm.currenttransnav * displaydata + 5);
        }
    }

})();

