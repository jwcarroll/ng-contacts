/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

  var ContactCard = function(){
    return {
      restrict:'E',
      templateUrl:'/partials/contact-card',
      replace:true,
      scope:{
        contact:'=',
        delete:'&'
      }
    };
  };

  angular.module('ngContactsApp')
    .directive('contactCard', ContactCard);

}());