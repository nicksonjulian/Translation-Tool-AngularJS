(function () {
    'use strict';

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
        Service.deleteData = deleteData;
        Service.getAllData = getAllData;
        Service.getMeaning = getMeaning;

        Parse.initialize(PARSE_APP_ID, PARSE_KEY);

        var Data = Parse.Object.extend("Data");

        return Service;

        /////////////////////////////////

        function createData(v1, v2, callback) {

            var newdata = new Data();
            newdata.set("v1", v1);
            newdata.set("v2", v2);
            newdata.save(
                null, {
                    success: callback,
                    error: callback
                }
            );

            return newdata;
        }


        //get data by k, set value with v
        function setData(id, v1, v2) {
            var query = new Parse.Query(Data);
            var defer = $q.defer();
            query.get(
                id, {
                    success: function(data) {
                        data.set("v1", v1);
                        data.set("v2", v2);
                        data.save();
                        defer.resolve(data);
                    },
                    error: defer.reject
                }
            );

            return defer.promise;
        }

        function deleteData(id) {
            var query = new Parse.Query(Data);
            var defer = $q.defer();
            query.get(
                id, {
                    success: function(data) {
                        data.destroy({});
                        defer.resolve();
                    },
                    error: defer.reject
                }
            );

            return defer.promise;
        }

        function getAllData() {
            var query = new Parse.Query(Data);
            console.log(query);
            return query;
        }

        function getMeaning(v1) {
            var query = new Parse.Query(Data);
            query.equalTo("v1", v1);
            return query;

        }


    }
})();