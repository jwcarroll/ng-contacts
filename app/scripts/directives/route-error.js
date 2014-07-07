/**
 * Created by Josh on 6/28/14.
 */
(function(){
  'use strict';

  angular.module('ngContactsApp')
    .directive('routeError', function(){
      return {
        restrict:'E',
        replace:true,
        templateUrl:'/partials/route-error',
        link:function(scope){
          scope.hasError = false;

          scope.$on('$routeChangeSuccess', function(){
            scope.hasError = false;
          });

          scope.$on('$routeChangeError', function(){
            scope.hasError = true;
          });
        }
      };
    });
}());