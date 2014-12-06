'use strict';

angular.module('states.phones.list')

.config([
  '$stateProvider', function($stateProvider) {
    $stateProvider.state('phones.list', {
      url: '',
      views: {
        'main': {
          templateUrl: 'states/phones/list/main.html',
          controller: 'PhoneListCtrl'
        }
      }
    });
  }
]);
