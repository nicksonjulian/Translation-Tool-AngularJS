(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .service('loginService', function() {

        var app_id = "feb37edoK2V51h0k5Vefnf5rrMIP7wYZgLfjnwqo";
        var js_key = "PHp0oirB0WnG110mHqqp2pyXBcV6kB61t1h9qPGW";
        Parse.initialize(app_id, js_key);
   

        this.signUp = function signUp(username, email, password) {
        	var newUser = new Parse.User();
        	newUser.set("username", username);
        	newUser.set("email", email);
            newUser.set("password", password);
        	newUser.signUp(null, {
        		success: function(newUser) {
                    console.log("New User created with id " + newUser.id + " name: " + newUser.get("username"));

        		},
        		error: function(newUser, error) {
                    console.log("Failed creating User " + error.message);
        		}
        	});
        	return newUser.id;
        };

        this.logIn = function logIn(username, password) {
            Parse.User.logIn(username, password, {
              success: function(user) {
                console.log("Login successful " + username);
              },
              error: function(user, error) {
                console.log("Failed" + error.message);
                // The login failed. Check error to see why.
              }
            });
        }

        this.getUser = function getUser(id) {
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

        this.getCurrentUser = function getCurrentUser() {
            var currentUser = Parse.User.current();
            if (currentUser) {
                return currentUser;
            }
            else {
                console.log("no user is currently logged in")
            }
        }

        this.logOut = Parse.User.logOut();
    });
})();