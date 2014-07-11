/**
 * Created by Josh on 7/11/14.
 */
(function () {
  'use strict';

  var ShowAfter = function($timeout){
    return {
      restrict:'A',
      link:function(scope, elem, attrs){
        elem.hide();

        var milliseconds = parseInt(attrs.showAfter, 10);

        if(!angular.isNumber(milliseconds)){
          milliseconds = 0;
        }

        $timeout(function(){
          elem.show();
        }, milliseconds);
      }
    };
  };
  ShowAfter.$inject = ['$timeout'];

  angular.module('ngContactsApp')
    .directive('showAfter', ShowAfter);

}());