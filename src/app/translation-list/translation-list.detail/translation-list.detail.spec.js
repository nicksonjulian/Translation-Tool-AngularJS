(function () {
    'use strict';

	xdescribe("Controller: TranslationListDetailController", function() {
		var scope, parseUserService, loginService, $location;

		beforeEach(function() {
			var mockParseUserService = {};
			var mockLoginService = {};
			module("translationToolAngularJs", function($provide) {
				$provide.value("parseUserService", mockParseUserService);
				$provide.value("loginService", mockLoginService);
			});

			inject(function($q) {
				mockParseUserService.data =
				[
				{
					id: 0,
					v1: "Hello",
					v2: "Hallo"
				},
				{
					id: 1,
					v1: "Saya",
					v2: "I"
				}
				];

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

				mockParseUserService.getAllData = function(user) {
					var defer = $q.defer();
        			defer.resolve(this.data);
        			return defer.promise;
				}

				mockLoginService.getCurrentUser = function() {
					return "fakeUser"
				}

			});
		});

		beforeEach(inject(function($controller, $rootScope, _$location_, _parseUserService_, _loginService_) {
			console.log("bay");
			scope = $rootScope.$new();
			$location = _$location_;
			parseUserService = _parseUserService_;
			loginService = _loginService_;

			$controller("TranslationListDetailController", {$scope: scope, parseUserService: parseUserService, loginService: loginService});
			scope.editorEnabled = false;
			scope.translations = parseUserService.data;
			scope.$digest();

		}));

		xit('should contain all the translations at startup', function() {
			expect(scope.translations).toEqual([
				{
					id: 0,
					v1: "Hello",
					v2: "Hallo"
				},
				{
					id: 1,
					v1: "Saya",
					v2: "I"
				}

			]);
		});


		xit('should enable editor of translations at index 0', function() {
			scope.editTrans(0);
			expect(scope.translations[0].editorEnabled).toEqual(true);
		})

	});
})();