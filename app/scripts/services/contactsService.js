/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

  var ContactsService = function ($http) {
    this.$http = $http;
  };
  ContactsService.$inject = ['$http'];

  angular.extend(ContactsService.prototype, {
    getContacts: function () {
      return this.$http.get('/api/contacts');
    },
    getContact: function (id) {
      return this.$http.get('/api/contacts/' + id);
    },
    saveContact: function (contact) {
      var id = (contact && contact._id);

      return this.$http({
        url: '/api/contacts/' + (id || ''),
        method: id ? 'PUT' : 'POST',
        data: contact
      });
    },
    deleteContact: function (id) {
      return this.$http.delete('/api/contacts/' + id);
    }
  });

  angular.module('ngContactsApp')
    .service('contactsService', ContactsService);

}());