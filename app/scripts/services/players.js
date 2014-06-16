'use strict';
angular.module('tcsApp')
.factory('Players', ['$http',
		 function ($http) {
	return {
		list : function(){
			return $http.jsonp("http://api.dribbble.com/shots/" + listType + "?callback=JSON_CALLBACK");
		},
		get : function(id){
			return $http.jsonp("http://api.dribbble.com/players/" + id + "?callback=JSON_CALLBACK");
		}
	}
}]);