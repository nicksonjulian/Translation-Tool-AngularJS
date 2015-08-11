(function () {
    'use strict';

    angular.module('translationToolAngularJs')
        .service('parseService', Service);

    Service.$inject = ['PARSE_APP_ID', 'PARSE_KEY'];

    function Service(
        PARSE_APP_ID,
        PARSE_KEY
    ) {

        var Service = this;

        Service.createData = createData;
        Service.setData = setData;
        Service.getData = getData;
        Service.deleteData = deleteData;

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

        function getData(id) {
            var query = new Parse.Query(Data);
            return query.get(
                id, {
                    success: console.log,
                    error: console.log
                }
            );
        }


        //get data by k, set value with v
        function setData(id, v1, v2) {
            var data = this.getData(id);
            data.set("v1", v1);
            data.set("v2", v2);
            newdata.save(
                null, {
                    success: console.log,
                    error: console.log
                }
            );
        }

        function deleteData(id) {
            var data = this.getData(id);
            data.destroy(
                {
                    success: console.log,
                    error: console.log
                }
            );
        }
    }
})();