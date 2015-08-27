/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('translationToolAngularJs')
    .constant('FEATURE_LIST',
    	[{
	  		id:0,
	  		title: "FEATURE1",
	  		description: "feature1 desc",
	  		imgsrc: "app/components/images/dog.jpg"
  		},
	  		{
	  		id:1,
	  		title: "FEATURE2",
	  		description: "feature2 desc",
	  		imgsrc: "app/components/images/cat.jpg"
  		},
  		{
	  		id:2,
	  		title: "FEATURE3",
	  		description: "feature3 desc",
	  		imgsrc: "app/components/images/bird.jpg"
  		}
  		]
  	);
}) ();
