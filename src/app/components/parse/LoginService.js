(function() {
  'use strict';

  /**
    * @ngdoc service
    * @name loginService
    * 
    * @description
    * Service that handles user login, logout, signout, etc.
    * Makes use of Parse.User.
    *
    */
  angular
    .module('translationToolAngularJs')
    .service('loginService', Service1);

    Service1.$inject = ['PARSE_APP_ID', 'PARSE_KEY', '$q'];

    function Service1(
        PARSE_APP_ID,
        PARSE_KEY,
        $q

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

        /**
         * @ngdoc method
         * @name loginService#signUp
         * @methodOf loginService
         * @description
         *
         * Creates a new user account.
         *
         * @param {String} username The username.
         * @param {String} email The email to be associated with the account.
         * @param {String} password The password.
         * @returns {void} void
         *
         */
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
        	//return newUser.id;
        };

        /**
         * @ngdoc method
         * @name loginService#logIn
         * @methodOf loginService
         * @description
         *
         * Logs in a user.
         *
         * @param {String} username The username.
         * @param {String} email The email to be associated with the account.
         * @returns {void} void
         *
         */
        function logIn(username, password) {
            return Parse.User.logIn(username, password);
        }

        /**
         * @ngdoc method
         * @name loginService#getUser
         * @methodOf loginService
         * @description
         *
         * Retrieves a user object by its id.
         *
         * @param {id} username The username.
         * @returns {void} void
         *
         */
        // function getUser(id) {
        // 	var query = new Parse.Query(User);
        // 	return query.get(id, {
        // 		success: function(object) {
        //             console.log("successfully retrieving User" + object.get("v1")) ;

        // 		},
        // 		error: function(object, error) {
        //             console.log("failed retrieving User");
        // 		}
        // 	});
        // };

        /**
         * @ngdoc method
         * @name loginService#getCurrentUser
         * @methodOf loginService
         * @description
         *
         * Retrieves current logged-in user.
         *
         * @returns {String} the username of current logged User, does not return anything if no user's currently logged-in.
         *
         */
        function getCurrentUser() {
            var currentUser = Parse.User.current();
            if (currentUser) {
                return currentUser.get("username");
            }
            else {
                console.log("no user is currently logged in");
            }
        }

        /**
         * @ngdoc method
         * @name loginService#logOut
         * @methodOf loginService
         * @description
         *
         * Logs out current user.
         *
         * @returns {void} void.
         *
         */
        function logOut(){
            Parse.User.logOut();
        }
    }

})();