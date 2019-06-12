'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.myHtml = "<h1>Hello World</h1>"

    $scope.froalaOptions = {
      toolbarButtons: ["bold", "italic", "underline", "|", "align", "formatOL", "formatUL"],
      events: {
        contentChanged: function () {
          console.log($scope.froalaOptions.froalaEditor.html.get());
        },
        initialized: function () {
          console.log('init');
        }
      }
    }

  }]);