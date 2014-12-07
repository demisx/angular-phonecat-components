angular.module('components.phone').
  directive('phoneItem', function(){
    return {
      restrict: 'E',
      scope: {
        name: "@",
        description: "@",
        href: "@",
        imgSrc: "@"
      },
      templateUrl: "components/phone/item-partial.html"
    };
  });