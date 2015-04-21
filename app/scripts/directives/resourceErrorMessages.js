(function () {
  'use strict';
  angular.module('demoApp')
    .directive('resourceErrorMessages', function ($log) {
      return {
        restrict: 'E',
        templateUrl: 'views/directives/resourceErrorMessages.html',
        scope: {
          messages: '='
        },
        link: function (scope, element, attributes) {
          $log.debug('got these messages', scope.messages);
          scope.$watch('messages', function (newVal) {
            var errors = [];
            for (var key in scope.messages) {
              errors.push({
                field: key,
                list: scope.messages[key]
              });
            }
            scope.errors = errors;
          });
        }
      };
    });
})();
