(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .service('loginService', Service1);

    Service1.$inject = ['PARSE_APP_ID', 'PARSE_KEY'];

    function Service1(
        PARSE_APP_ID,
        PARSE_KEY

    ) {

        Parse.initialize(PARSE_APP_ID, PARSE_KEY);
        var Service = this;
        Service.currentUsername = getCurrentUser();
        Service.signUp = signUp;
        Service.logIn = logIn;
        Service.getUser = getUser;
        Service.getCurrentUser = getCurrentUser;
        Service.logOut = logOut;

        return Service;
        
        //////////////////////////////


        function signUp(username, email, password) {
        	var newUser = new Parse.User();
        	newUser.set("username", username);
        	newUser.set("email", email);
            newUser.set("password", password);
        	newUser.signUp(null, {
        		success: function(newUser) {
                    this.currentUsername = username;
                    console.log("New User created with id " + newUser.id + " name: " + Service.currentUsername);
        		},
        		error: function(newUser, error) {
                    console.log("Failed creating User " + error.message);
        		}
        	});
        	return newUser.id;
        };

        function logIn(username, password, $state) {
            return Parse.User.logIn(username, password, {
              success: function(user) {
                Service.currentUsername = username;
                console.log("Login successful " + username);
                console.log("yes");
              },
              error: function(user, error) {
                console.log("Failed" + error.message);
                return false;
                // The login failed. Check error to see why.
              }
            });
        }

        function getUser(id) {
        	var query = new Parse.Query(User);
        	return query.get(id, {
        		success: function(object) {
                    console.log("successfully retrieving User" + object.get("v1")) ;

        		},
        		error: function(object, error) {
                    console.log("failed retrieving User");
        		}
        	});
        };

        function getCurrentUser() {
            var currentUser = Parse.User.current();
            if (currentUser) {
                return currentUser.get("username");
            }
            else {
                console.log("no user is currently logged in");
                return null;
            }
        }

        function logOut(){
            Parse.User.logOut();
        }
    }

})();