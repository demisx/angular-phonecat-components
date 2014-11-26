'use strict';

angular.module('states.phones.list')

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'states/phones-list/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
