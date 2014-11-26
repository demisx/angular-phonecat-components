'use strict';

angular.module('states.phones.detail')

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones/:phoneId', {
        templateUrl: 'states/phones-detail/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
  }]);
