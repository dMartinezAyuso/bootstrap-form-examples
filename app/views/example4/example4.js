'use strict';

angular.module('myApp.example4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example4', {
    templateUrl: 'views/example4/example4.html',
    controller: 'Example4Ctrl'
  });
}])

.controller('Example4Ctrl', [function() {

}]);
