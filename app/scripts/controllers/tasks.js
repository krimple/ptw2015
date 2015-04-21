'use strict';


/**
 * @ngdoc function
 * @name angularGettingStartedApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the angularGettingStartedApp
 */
angular.module('demoApp')
  .controller('TasksController', function ($log, $resource, $scope, $mdDialog) {
    var Task = $resource('/api/tasks');

    function loadTasks() {
      Task.query(function (tasks) {
        $log.debug('got tasks', tasks);
        $scope.tasks = tasks;
      });
    }

    $scope.addTask = function (task, $event) {
      new Task(task).$save()
        .then(
        function () {
          $scope.loadTasks();
        },
        function (result) {
          var messages = result.data.error.details.messages;
          $scope.messages = messages;
          $log.error('Failed to load tasks', messages);
          $mdDialog.show({
            targetEvent: $event,
            // todo - get locals working - doesn't pass properly
            scope: $scope,
            templateUrl: 'views/dialogs/errorMessagesDialog.html',
            controller: DialogController
          });
          function DialogController(scope, $mdDialog) {
            scope.closeDialog = function() {
              $mdDialog.hide();
            }
          }
        });
    };

    $scope.modifyTask = function (task) {
      Task.find({id: task.id})
        .then(function (result) {
          $scope.task = result;
        });
    };

    $scope.loadTasks = function () {
      loadTasks();
    };

    loadTasks();

  });
