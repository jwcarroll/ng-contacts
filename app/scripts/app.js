/**
 * Created by Josh on 7/7/14.
 */
(function () {
  'use strict';

  angular.module('ngContactsApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/contact-list',
          controller: 'contactListCtrl',
          controllerAs: 'ctrl'
        })
        .when('/contact/:contactId?', {
          templateUrl: 'partials/contact-details',
          controller: 'contactCtrl',
          controllerAs: 'ctrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

}());