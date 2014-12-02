'use strict';

angular.module('myApp.example8', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example8', {
    templateUrl: 'views/example8/example8.html',
    controller: 'Example8Ctrl'
  });
}])

.controller('Example8Ctrl', [function() {

}]);
