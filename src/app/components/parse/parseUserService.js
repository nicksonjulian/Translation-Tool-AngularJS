(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name parseUserService
     * 
     * @description
     * Service to retrieve user-related translation datas from Parse.com.
     *
     */
    angular.module('translationToolAngularJs')
        .service('parseUserService', Service);

    Service.$inject = ['PARSE_APP_ID', 'PARSE_KEY'];

    function Service(
        PARSE_APP_ID,
        PARSE_KEY
    ) {

        var Service = this;

        Service.createData = createData;
        Service.setData = setData;
        Service.getDataById = getDataById;
        Service.deleteData = deleteData;
        Service.getAllData = getAllData;

        Parse.initialize(PARSE_APP_ID, PARSE_KEY);

        var Data = Parse.Object.extend("UserData");

        return Service;

        /////////////////////////////////


        /**
         * @ngdoc method
         * @name parseUserService#createData
         * @methodOf parseUserService
         * @description
         *
         * Creates a new translation data.
         *
         * @param {String} v1 The to-be-translated word.
         * @param {String} v2 The translated word.
         * @param {String} user The user to be associated with the new translation.
         * @returns {Data} the translation object.
         *
         */
        function createData(v1, v2, user) {
            var newdata = new Data();
            newdata.set("v1", v1);
            newdata.set("v2", v2);
            newdata.set("user", user)
            newdata.save(
                null, {
                    success: console.log,
                    error: console.log
                }
            );

            return newdata;
        }

        // function getDataById(id) {
        //     var query = new Parse.Query(Data);
        //     query.get(
        //         id, {
        //             success: function(data) {
        //                 console.log("object retrieved " + id);
        //             },
        //             error: console.log
        //         }
        //     );
        // }


        /**
         * @ngdoc method
         * @name parseUserService#setData
         * @methodOf parseUserService
         * @description
         *
         * Modifies existing translation.
         *
         * @param {Number} id the id of translation.
         * @param {String} v1 The new to-be-translated word.
         * @param {String} v2 The new translated word.
         * @returns {void} void.
         *
         */
        function setData(id, v1, v2) {
            var query = new Parse.Query(Data);
            query.get(
                id, {
                    success: function(data) {
                        data.set("v1", v1);
                        data.set("v2", v2);
                        data.save();
                        console.log("object modified " + id);
                    },
                    error: console.log
                }
            );
        }

        /**
         * @ngdoc method
         * @name parseUserService#deleteData
         * @methodOf parseUserService
         * @description
         *
         * Deletes existing translation.
         *
         * @param {Number} the id of translation to be deleted.
         * @returns {void} void.
         *
         */

        function deleteData(id) {
            var query = new Parse.Query(Data);
            query.get(
                id, {
                    success: function(data) {
                        console.log(data);
                        data.destroy({});
                    },
                    error: console.log
                }
            );
        }

        /**
         * @ngdoc method
         * @name parseUserService#getAllData
         * @methodOf parseUserService
         * @description
         *
         * Returns query of all datas associated with the user.
         *
         * @param {String} user the username whose translation datas are to be retrieved.
         * @returns {Parse.Query} the query that contains translation datas.
         * 
         */
        function getAllData(user) {
            var query = new Parse.Query(Data);
            query.limit(20);
            console.log("theuser of the data want to be taken " + user)
            query.equalTo("user", user);
            console.log("success getAllData");
            return query;
        }


    }
})();