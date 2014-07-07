(function () {
  'use strict';

  var NavbarCtrl = function ($location) {
    this.$location = $location;
    this.menu = [
      {
        'title': 'Contacts',
        'link': '/'
      },
      {
        'title': 'Add Contact',
        'link':'/contact'
      }
    ];
  };

  NavbarCtrl.$inject = ['$location'];

  angular.extend(NavbarCtrl.prototype, {
    isActive: function (route) {
      return route === this.$location.path();
    }
  });

  angular.module('ngContactsApp')
    .controller('NavbarCtrl', NavbarCtrl);
}());