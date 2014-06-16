'use strict';
angular.module('tcsApp')
.factory('Shots', ['$http',
		 function ($http) {
	return {
		list : function(listType){
			return $http.jsonp("http://api.dribbble.com/shots/" + listType + "?callback=JSON_CALLBACK");
		},
		get : function(id){
			return $http.jsonp("http://api.dribbble.com/shots/" + id + "?callback=JSON_CALLBACK");
		}
	}
}]);