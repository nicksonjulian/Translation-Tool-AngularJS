(function () {
    'use strict';

	describe("Controller: TranslationListDetailController", function() {


		var TRANSLATION_LIST = [ {
				id: 0,
				_serverData: {
					v1: "Hello",
					v2: "Hallo"
				},
				//editorEnabled: false
				user: "fakeuser"
			}, {
				id: 1,
				// v1: "Saya",
				// v2: "I",
				_serverData: {
					v1: "Saya",
					v2: "I"
				},
				//editorEnabled: false
				user: "fakeuser"
			}];

		var $scope, parseUserService, loginService, $location, $controller, $state;

		beforeEach(function() {
			var mockParseUserService = {};
			var mockLoginService = {};
			module("translationToolAngularJs", function($provide) {
				$provide.value("parseUserService", mockParseUserService);
				$provide.value("loginService", mockLoginService);
			});

			inject(function($q) {
				mockParseUserService.data = TRANSLATION_LIST;

				mockParseUserService.getAllData = function() {
					var Service = this;
					return {
						find: function(options) {
							if (angular.isFunction(options.success)) {
								options.success(Service.data);
							}
						}
					};
				};

				mockParseUserService.createData = function(v1, v2, user) {
					// var id = this.data.length;
					// var item = {
					// 	id: id,
					// 	_serverData: {
					// 		v1: v1,
					// 		v2: v2
					// 	},
					// 	editorEnabled: false
					// };

					// this.data.push(item);
				};

				mockParseUserService.setData = function(id, v1, v2) {
					// this.data[id]._serverData.v1 = v1;
					// this.data[id]._serverData.v2 = v2;
				};

				mockParseUserService.deleteData = function(id) {

				};



				/////////////////

				mockLoginService.getCurrentUser = function() {
					return "fakeUser"
				};

				mockLoginService.currentUsername = "fakeUser";

			});
		});

		beforeEach(inject(function(_$controller_, _$location_, _parseUserService_, _loginService_, _$state_) {
			$scope = {};
			$location = _$location_;
			$controller = _$controller_;
			$state = _$state_;
			parseUserService = _parseUserService_;
			loginService = _loginService_;
		}));

		it('should contain all the translations at startup', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			expect(vm.translations).toEqual(TRANSLATION_LIST);
		});

		it('editTrans should enable editor of translations at index 0', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			vm.editTrans(0);
			expect(vm.translations[0].editorEnabled).toEqual(true);
		});

		it('saveTrans should call parseUserService.setData', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			spyOn(parseUserService, 'setData');
			vm.saveTrans(0);
			expect(parseUserService.setData).toHaveBeenCalled();
			expect(vm.translations[0].editorEnabled).toEqual(false);
		});

		it('disabledEditor should disable editor of translations at index 0', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			vm.disabledEditor(0);
			expect(vm.translations[0].editorEnabled).toEqual(false);
		});

		it('capitalize should uppercase first letter', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			var lcsstring = vm.capitalize("lowercase");
			expect(lcsstring).toEqual("Lowercase");

			var lcsstring2 = vm.capitalize("");
			expect(lcsstring2).toEqual(undefined);
		});

		it('addTrans should call parseUserService.createData, set vm.newword to blank, and reload page', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService, $state:$state });
			vm.newWord1 = "newword1";
			vm.newWord2 = "newword2";
			spyOn(parseUserService, 'createData');
			spyOn($state, 'go');

			vm.addTrans();
			expect(parseUserService.createData).toHaveBeenCalledWith("Newword1", "Newword2", "fakeUser");
			expect($state.go).toHaveBeenCalledWith("translationList.detail", {}, {reload: true});
		});

		it('delTrans should call confirm dialog and call parseUserService.deleteData', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			spyOn(window, 'confirm').and.returnValue(true);
			spyOn(parseUserService, 'deleteData');
			
			vm.delTrans(0);
			expect(parseUserService.deleteData).toHaveBeenCalled();



		});






	});
})();