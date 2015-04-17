'use strict';

/**
 * @ngdoc function
 * @name angularGettingStartedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGettingStartedApp
 */
angular.module('angularGettingStartedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
