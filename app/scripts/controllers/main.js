'use strict';

/**
 * @ngdoc function
 * @name angularGettingStartedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGettingStartedApp
 */
angular.module('angularGettingStartedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
