describe("Controller: TranslationListDetailController", function() {
	var scope, parseUserService, loginService, $location;

	beforeEach(function() {
		var mockRestService = {};
		var mockRestService2 = {};
		module("app", function($provide) {
			$provide.value("parseUserService", mockRestService);
			$provide.value("loginService", mockRestService2);
		});

		inject(function($q) {
			mockRestService.data = [
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
		};

		mockRestService.createData = function(v1, v2, user) {
			var id = this.data.length;
			var item = {
				id: id,
				v1: v1,
				v2: v2,
				user: user
			};

			this.data.push(item);

		}


	});

	beforeEach(inject(function($controller, $rootScope, _$location_, _parseUserService_, _loginService_) {
		scope = $rootScope.$new();
		$location = _$location_;
		parseUserService = _parseUserService_;
		loginService = _loginService_;

		$controller("TranslationListDetailController", {parseUserService: parseUserService, loginService: loginService, $scope: scope});
		$scope.$digest();

	}));

	it('should contain all the translations at startup', function() {
		expect(scope.libraries).toEqual([
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


});