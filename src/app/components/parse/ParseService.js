(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name parseService
     * 
     * @description
     * Service to retrieve non-user-related translation datas from Parse.com.
     *
     */
    angular
        .module('translationToolAngularJs')
        .service('parseService', Service);

    Service.$inject = ['PARSE_APP_ID', 'PARSE_KEY'];

    function Service(
        PARSE_APP_ID,
        PARSE_KEY
    ) {

        var Service = this;

        Service.createData = createData;
        Service.setData = setData;
       // Service.getDataById = getDataById;
        Service.deleteData = deleteData;
        Service.getAllData = getAllData;
        Service.getMeaning = getMeaning;

        Parse.initialize(PARSE_APP_ID, PARSE_KEY);

        var Data = Parse.Object.extend("Data");

        return Service;

        /////////////////////////////////

        /**
         * @ngdoc method
         * @name parseService#createData
         * @methodOf parseService
         * @description
         *
         * Creates a new translation data.
         *
         * @param {String} v1 The to-be-translated word.
         * @param {String} v2 The translated word.
         * @returns {Data} the translation object.
         *
         */
        function createData(v1, v2) {
            var newdata = new Data();
            newdata.set("v1", v1);
            newdata.set("v2", v2);
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
         * @name parseService#setData
         * @methodOf parseService
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
         * @name parseService#deleteData
         * @methodOf parseService
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
         * @name parseService#getAllData
         * @methodOf parseService
         * @description
         *
         * Returns query of all datas associated with the user.
         *
         * @returns {Parse.Query} the query that contains translation datas.
         * 
         */
        function getAllData() {
            var query = new Parse.Query(Data);
            console.log(query);
            return query;
        }

        /**
         * @ngdoc method
         * @name parseService#getMeaning
         * @methodOf parseService
         * @description
         *
         * Returns query that contains translation object.
         *
         * @returns {Parse.Query} the query that contains translation datas.
         * 
         */
        function getMeaning(v1) {
            var query = new Parse.Query(Data);
            query.equalTo("v1", v1);
            return query;
        }


    }
})();