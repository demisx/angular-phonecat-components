'use strict';

angular.module('app.components.utils')

.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
