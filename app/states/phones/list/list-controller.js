'use strict';

angular.module('states.phones.list')

.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    console.debug('[states.phones.list.controller()]');
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);
