(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .service('parseService', function() {
    // 	var Data = Parse.Object.extend("Data", {
    // 		// Instance methods
    // 		getValue: function() {
    // 			return this.get("v");
    // 		},
    // 		initialize: function(k, v) {
    // 			this.k = k;
    // 			this.v = v;
    // 		}
    // 	},
    // 	{
    // 		// Class methods
    // 		create: function(k, v) {
    // 			var newdata = new Data();
    // 			newdata.set("k", k);
    // 			newdata.set("v", v);
    // 			return newdata;
    // 		}
    // 	}
    // });
        
        var Data = Parse.Object.extend("Data");
        this.createData = function createData(v1, v2) {
        	var newdata = new Data();
        	newdata.set("v1", v1);
        	newdata.set("v2", v2);
        	newdata.save(null, {
        		success: function(newdata) {

        		},
        		error: function(newdata, error) {

        		}
        	});
        	return newdata;
        };

        this.getData = function getData(id) {
        	var query = new Parse.Query(Data);
        	return query.get(id, {
        		success: function() {

        		},
        		error: function(object, error) {

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

        		},
        		error: function(newdata, error) {

        		}
        	});
        };

        this.deleteData = function deleteData(id) {
        	var data = this.getData(id);
        	data.destroy({
        		success: function(data) {

        		},
        		error: function(data, error) {

        		}
        	});
        };
    });
})();