(function () {
    'use strict';

	describe("Controller: TranslationListDetailController", function() {


		var TRANSLATION_LIST = [ {
				id: 0,
				v1: "Hello",
				v2: "Hallo",
				editorEnabled: false
			}, {
				id: 1,
				v1: "Saya",
				v2: "I",
				editorEnabled: false
			}];

		var $scope, parseUserService, loginService, $location, $controller;

		beforeEach(function() {
			var mockParseUserService = {};
			var mockLoginService = {};
			module("translationToolAngularJs", function($provide) {
				$provide.value("parseUserService", mockParseUserService);
				$provide.value("loginService", mockLoginService);
			});

			inject(function($q) {
				mockParseUserService.data = TRANSLATION_LIST;

				mockParseUserService.createData = function(v1, v2, user) {
					var id = this.data.length;
					var item = {
						id: id,
						v1: v1,
						v2: v2,
						user: user
					};

					this.data.push(item);
				};

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

				mockLoginService.getCurrentUser = function() {
					return "fakeUser"
				};

			});
		});

		beforeEach(inject(function(_$controller_, _$location_, _parseUserService_, _loginService_) {
			$scope = {};
			$location = _$location_;
			$controller = _$controller_;
			parseUserService = _parseUserService_;
			loginService = _loginService_;
		}));

		it('should contain all the translations at startup', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			expect(vm.translations).toEqual(TRANSLATION_LIST);
		});


		it('should enable editor of translations at index 0', function() {
			var vm = $controller("TranslationListDetailController", { $scope: $scope, parseUserService: parseUserService, loginService: loginService });
			vm.editTrans(0);
			expect(vm.translations[0].editorEnabled).toEqual(true);
		})

	});
})();