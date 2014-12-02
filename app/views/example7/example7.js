'use strict';

angular.module('myApp.example7', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example7', {
    templateUrl: 'views/example7/example7.html',
    controller: 'Example7Ctrl'
  });
}])

.controller('Example7Ctrl', [function() {

}]);
