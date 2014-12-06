'use strict';

angular.module('states.phones')

.config([
  '$stateProvider', function($stateProvider) {
    $stateProvider.state('phones', {
      abstract: true,
      url: '/phones',
      templateUrl: 'layouts/default.html'
    });
  }
]);
