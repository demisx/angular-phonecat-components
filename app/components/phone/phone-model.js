'use strict';

angular.module('app.components.phone')

.factory('Phone', ['$resource',
  function($resource){
    return $resource('components/phone/data/phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
