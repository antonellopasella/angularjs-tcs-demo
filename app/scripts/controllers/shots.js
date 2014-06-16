'use strict';

angular.module('tcsApp')
  .controller('ShotsListCtrl', function ($scope, $rootScope, Shots, $localStorage) {
    $rootScope.menuActive = 'shots';
    console.log($localStorage.shotsListListType);
    if($localStorage.shotsListListType){
        $scope.listType = $localStorage.shotsListListType;
    }else
        $scope.listType='everyone';

    $scope.aggiornaLista = function(){
        $localStorage.shotsListListType = $scope.listType;
        Shots
            .list($scope.listType)
            .success(function(data){
                console.log(data);
                $scope.shots = data.shots;
            })
            .error(function(){
            })
        ;
    };

    $scope.aggiornaLista();
  });
