(function() {
  'use strict';
   angular.module('demoApp', ['ngRoute', 'ngMaterial', 'firebase'])
     .constant('VIEW_LOCATION', 'views/')
     .config(function($routeProvider, VIEW_LOCATION) {
       $routeProvider
         .when('/', {
           templateUrl: VIEW_LOCATION + 'default.html'
         })
         .when('/chat', {
           templateUrl: VIEW_LOCATION + 'chat.html'
         })
         .otherwise({
           redirectTo: '/'
         });
     });
  // code here
})();

