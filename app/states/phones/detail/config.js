'use strict';

angular.module('states.phones.detail')

.config([
  '$stateProvider', function($stateProvider) {
    $stateProvider.state('phones.detail', {
      url: '/:phoneId',
      views: {
        'main': {
          templateUrl: 'states/phones/detail/main.html',
          controller: 'PhoneDetailCtrl'
        }
      }
    });
  }
]);
