(function () {

  var ContactListCtrl = function ($scope) {
    this.$scope = $scope;

    this.initialize();
  };
  ContactListCtrl.$inject = ['$scope'];

  angular.extend(ContactListCtrl.prototype, {
    contacts: [
      {
        firstName: 'Josh',
        lastName: 'Carroll',
        email: 'jwarren.carroll@gmail.com',
        phoneNumber: '8655555555',
        dob: new Date('6/22/1981')
      },
      {
        firstName: 'Patty',
        lastName: 'Carroll',
        phoneNumber: '8655555555',
        dob: new Date('1/23/1981')
      },
      {
        firstName: 'Scott',
        lastName: 'Hanselman',
        email: 'scott@hanselman.com',
        dob: new Date('1/22/1974')
      },
      {
        firstName: 'Paul',
        lastName: 'Irish',
        dob: new Date('7/23/1982')
      }
    ],
    initialize: function () {
      var _this = this;

      _this.$scope.contacts = this.contacts;
    }
  });

  angular.module('ngContactsApp')
    .controller('contactListCtrl', ContactListCtrl);

}());