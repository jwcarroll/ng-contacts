/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

  var RouteError = function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/partials/route-error',
      link: function (scope, element, attrs) {
        scope.hasError = false;

        scope.$on('$routeChangeSuccess', function () {
          scope.hasError = false;
        });

        scope.$on('$routeChangeError', function () {
          scope.hasError = true;
        });
      }
    };
  };

  angular.module('ngContactsApp')
    .directive('routeError', RouteError);

}());