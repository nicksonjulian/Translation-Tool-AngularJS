(function () {
    'use strict';

	describe("Controller: SignUpController", function() {


		var $scope, loginService, $location, $controller, $state, deferred;

		beforeEach(function() {
			var mockLoginService = {};
			module("translationToolAngularJs", function($provide) {
				$provide.value("loginService", mockLoginService);
			});

			inject(function($q, $state) {
				mockLoginService.signUp = function() {
					deferred = $q.defer();
					deferred.resolve(function() {
						//console.log("jigong1");
						//$state.go("landing.userLogged", {"username": signInvm.username});
					});
					return deferred.promise;
				};
			});
		});

		beforeEach(inject(function($rootScope, _$controller_, _$location_, _loginService_, _$state_) {
			$scope = $rootScope.$new();
			$location = _$location_;
			$controller = _$controller_;
			$state = _$state_;
			loginService = _loginService_;
		}));

		it('logIn should call loginService.logIn', function() {
			var vm = $controller("SignInController", { $scope: $scope, loginService: loginService, $state:$state });
			var e = jasmine.createSpyObj('e', [ 'preventDefault' ]);
			vm.username = "username1";
			vm.password = "password1";
			spyOn(loginService, 'logIn').and.callThrough();
			spyOn($state, 'go');

			vm.logIn(e);
			$scope.$apply();
			expect(e.preventDefault).toHaveBeenCalled();
			expect(loginService.logIn).toHaveBeenCalled();
			expect($state.go).toHaveBeenCalledWith("landing.userLogged", {"username": vm.username});
		});

		it('error should be printed since no username and password provided', function() {
			var vm = $controller("SignInController", { $scope: $scope, loginService: loginService, $state:$state });
			var e = jasmine.createSpyObj('e', [ 'preventDefault' ]);
			spyOn(console, 'log');


			vm.logIn(e);
			expect(console.log).toHaveBeenCalledWith("no email && password provided");

		})
	});
})();