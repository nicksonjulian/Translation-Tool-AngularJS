(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .service('parseService', function() {

        //var app_id = "feb37edoK2V51h0k5Vefnf5rrMIP7wYZgLfjnwqo";
        var app_id = "feb37edoK2V51h0k5Vefnf5rrMIP7wYZgLfjnwqo";
        //var js_key = "PHp0oirB0WnG110mHqqp2pyXBcV6kB61t1h9qPGW";
        var js_key = "PHp0oirB0WnG110mHqqp2pyXBcV6kB61t1h9qPGW";
        Parse.initialize(app_id, js_key);
   
        var Data = Parse.Object.extend("Data");

        this.createData = function createData(v1, v2) {
        	var newdata = new Data();
        	newdata.set("v1", v1);
        	newdata.set("v2", v2);
        	newdata.save(null, {
        		success: function(newdata) {
                    console.log("New Data created with id " + newdata.id);

        		},
        		error: function(newdata, error) {
                    console.log("Failed creating Data " + newdata.id);
        		}
        	});
        	return newdata;
        };

        this.getData = function getData(id) {
        	var query = new Parse.Query(Data);
        	return query.get(id, {
        		success: function(object) {
                    console.log("successfully retrieving Data" + object.get("v1")) ;

        		},
        		error: function(object, error) {
                    console.log("failed retrieving Data");
        		}
        	});
        };


        //get data by k, set value with v
        this.setData = function setData(id, v1, v2) {
        	var data = this.getData(id);
        	data.set("v1", v1);
        	data.set("v2", v2);
        	newdata.save(null, {
        		success: function(newdata) {
                    console.log("successfully updating Data");

        		},
        		error: function(newdata, error) {
                    console.log("failed updating Data");

        		}
        	});
        };

        this.deleteData = function deleteData(id) {
        	var data = this.getData(id);
        	data.destroy({
        		success: function(data) {
                    console.log("successfully deleting Data");

        		},
        		error: function(data, error) {
                    console.log("failed deleting Data");

        		}
        	});
        };
    });
})();