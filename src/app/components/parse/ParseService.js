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
       // Service.getDataById = getDataById;
        Service.deleteData = deleteData;
        Service.getAllData = getAllData;
        Service.getMeaning = getMeaning;

        Parse.initialize(PARSE_APP_ID, PARSE_KEY);

        var Data = Parse.Object.extend("Data");

        return Service;

        /////////////////////////////////

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


        //get data by k, set value with v
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