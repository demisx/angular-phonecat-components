angular.module('components.phone').
 directive('searchFilter', function(){
    return {
      restrict: 'E',
      scope: {
        query: '=',
        orderBy: '='
      },
      templateUrl: 'components/phone/search-filter-partial.html'
    };
  });