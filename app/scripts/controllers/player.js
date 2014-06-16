'use strict';

angular.module('tcsApp')
  .controller('PlayerViewCtrl', function ($scope, $rootScope, Players, $routeParams, $sce) {
    $rootScope.menuActive = 'players';

    Players
        .get($routeParams.id)
        .success(function(data){
            $scope.player = data;
            $scope.player.map_src = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyBL8AiWUuczRs9u5Ubgoy8wrBkjbbtNogM&q=' + $scope.player.location);
            console.log(data);

        })
        .error(function(){
        })
    ;
  });
