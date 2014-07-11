/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

  var MenuCtrl = function ($location) {
    this.$location = $location;
    this.menu = [
      {
        'title': 'Contacts',
        'link': '/'
      },
      {
        'title': 'Add Contact',
        'link':'/contact'
      },
      {
        'title':'Thank You!',
        'link':'/thank-you'
      },
      {
        'title':'???',
        'link':'/bad-route'
      }
    ];
  };

  MenuCtrl.$inject = ['$location'];

  angular.extend(MenuCtrl.prototype, {
    isActive: function (route) {
      return route === this.$location.path();
    }
  });

  angular.module('ngContactsApp')
    .controller('MenuCtrl', MenuCtrl);

}());