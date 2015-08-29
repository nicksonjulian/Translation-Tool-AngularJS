(function () {
    'use strict';

    angular.module('translationToolAngularJs')
        .service('parseUserService', Service);

    Service.$inject = ['$q', 'PARSE_APP_ID', 'PARSE_KEY'];

    function Service(
        $q,
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

        function createData(v1, v2, user, callback) {
            var newdata = new Data();
            newdata.set("v1", v1);
            newdata.set("v2", v2);
            newdata.set("user", user);
            newdata.save(
                null, {
                    success: callback,
                    error: callback
                }
            );

            return newdata;
        }

        function getDataById(id) {
            var query = new Parse.Query(Data);
            var defer = $q.defer();
            query.get(
                id, {
                    success: defer.resolve,
                    error: defer.reject
                }
            );

            return defer.promise;
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
                    error: defer.reject()
                }
            );

            return defer.promise;
        }

        function setData2(id, v1, v2) {
            var query = new Parse.Query(Data);
            query.get(
                id, {
                    success: callback,
                    error: callback
                }
            );
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
                    error: defer.reject()
                }
            );

            return defer.promise;
        }

        function getAllData(user) {
            var query = new Parse.Query(Data);
            query.limit(20);
            query.equalTo("user", user);
            return query;
        }


    }
})();