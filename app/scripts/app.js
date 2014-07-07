'use strict';

angular.module('ngContactsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/contact-list',
        controller: 'ContactListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/contact/:contactId?', {
        templateUrl: 'partials/contact-details',
        controller: 'ContactCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });