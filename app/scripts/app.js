(function() {
  'use strict';
   angular.module('demoApp', ['ngMaterial', 'ngRoute', 'ngResource'])
     .constant('VIEW_LOCATION', 'views/')
     .config(function($routeProvider, VIEW_LOCATION) {
       $routeProvider
         .when('/', {
           templateUrl: VIEW_LOCATION + 'default.html'
         })
         .when('/tasks', {
             templateUrl: VIEW_LOCATION + 'tasks.html',
             controller: 'TasksController'
         })
         .otherwise({
           redirectTo: '/'
         });
     });
  // code here
})();

