/**
 * Created by Josh on 7/7/14.
 */
(function () {
  'use strict';

  angular.module('ngContactsApp', ['ngRoute','ui.bootstrap','ngAnimate'])
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
        .when('/bad-route',{
          templateUrl:'partials/nope'
        })
        .when('/thank-you',{
          templateUrl:'partials/thank-you'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

}());