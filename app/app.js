'use strict';

// Declare app level module which depends on views, and components
angular.module('contactLibrary', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
