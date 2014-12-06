angular.module('phonecatApp')

.config([
  '$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/phones');
  }
]);