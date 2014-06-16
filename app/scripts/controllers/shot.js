'use strict';

angular.module('tcsApp')
  .controller('ShotViewCtrl', function ($scope, $rootScope, Shots, $routeParams) {
    $rootScope.menuActive = 'shots';

    Shots
        .get($routeParams.id)
        .success(function(data){
            $scope.shot = data;
            console.log(data);

        })
        .error(function(){
        })
    ;
  });
