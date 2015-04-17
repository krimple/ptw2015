(function() {
  'use strict';
   angular.module('demoApp', ['ngMaterial'])
     .constant('VIEW_LOCATION', './views/')
     .config(function($routeProvider, VIEW_LOCATION) {
       $routeProvider
         .when('/', {
           templateUrl: VIEW_LOCATION + 'default.html'
         })
         .otherwise({
           redirectTo: '/'
         });
     });
  // code here
})();

