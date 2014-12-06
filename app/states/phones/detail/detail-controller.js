'use strict';

angular.module('states.phones.detail')

.controller('PhoneDetailCtrl', ['$scope', '$stateParams', 'Phone',
  function($scope, $stateParams, Phone) {
    $scope.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);