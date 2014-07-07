(function () {
  'use strict';

  var ContactListCtrl = function (contactsService) {
    var _this = this;
    _this.contactsService = contactsService;
    _this.getContacts()
      .success(function (contacts) {
        _this.contacts = contacts;
      });
  };

  ContactListCtrl.$inject = ['contactsService'];

  angular.extend(ContactListCtrl.prototype, {
    contacts: [],
    getContacts: function () {
      return this.contactsService.getContacts();
    },
    deleteContact: function(contact){
      var _this = this;
      _this.contactsService.deleteContact(contact._id)
        .then(function(){
          _.remove(_this.contacts, {_id: contact._id});
        });
    }
  });

  angular.module('ngContactsApp')
    .controller('ContactListCtrl', ContactListCtrl);

}());