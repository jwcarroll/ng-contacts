(function () {

  var ContactListCtrl = function (contactsService) {
    this.contactsService = contactsService;
    this.initialize();
  };
  ContactListCtrl.$inject = ['contactsService'];

  angular.extend(ContactListCtrl.prototype, {
    contacts: [],
    initialize: function () {
      var _this = this;

      _this.contactsService.getContacts()
        .success(function(contacts){
          _this.contacts = contacts;
        });
    },
    deleteContact: function(contact){
      var _this = this;

      _this.contactsService.deleteContact(contact._id)
        .success(function(){
          _.remove(_this.contacts, contact);
        });
    }
  });

  angular.module('ngContactsApp')
    .controller('contactListCtrl', ContactListCtrl);

}());