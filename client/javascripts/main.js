var app = angular.module('Main', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/index.html',
        controller: 'MainController'
      });
  }]);