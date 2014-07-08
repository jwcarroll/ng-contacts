(function () {

  var ContactListCtrl = function ($http) {
    this.$http = $http;
    this.initialize();
  };
  ContactListCtrl.$inject = ['$http'];

  angular.extend(ContactListCtrl.prototype, {
    contacts: [],
    initialize: function () {
      var _this = this;

      _this.$http.get('/api/contacts')
        .success(function(contacts){
          _this.contacts = contacts;
        });
    },
    deleteContact: function(contact){
      var _this = this;

      _this.$http.delete('/api/contacts/' + contact._id)
        .success(function(){
          _.remove(_this.contacts, contact);
        });
    }
  });

  angular.module('ngContactsApp')
    .controller('contactListCtrl', ContactListCtrl);

}());