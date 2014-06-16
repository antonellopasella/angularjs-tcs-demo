'use strict';

angular
  .module('tcsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players/list.html',
        controller: 'PlayersListCtrl'
      })
      .when('/players/:id', {
        templateUrl: 'views/players/view.html',
        controller: 'PlayerViewCtrl'
      })
      .when('/shots', {
        templateUrl: 'views/shots/list.html',
        controller: 'ShotsListCtrl'
      })
      .when('/shots/:id', {
        templateUrl: 'views/shots/view.html',
        controller: 'ShotViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope, $location){
    $rootScope.openShot = function(id){
      $location.url("/shots/" + id);
    }
  });
