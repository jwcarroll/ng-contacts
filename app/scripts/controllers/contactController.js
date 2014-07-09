/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

  var ContactCtrl = function (contactsService, $location, $routeParams) {
    var _this = this;

    _this.contactsService = contactsService;
    _this.$location = $location;
    _this.$routeParams = $routeParams;

    _this.initialize();
  };
  ContactCtrl.$inject = ['contactsService', '$location', '$routeParams'];

  angular.extend(ContactCtrl.prototype, {
    contact: {},
    _originalContact: {},
    hasError: false,
    errorMsg: '',
    initialize: function () {
      var _this = this;

      if (angular.isDefined(this.$routeParams.contactId)) {
        _this.contactsService.getContact(this.$routeParams.contactId)
          .success(function (contact) {
            _this._originalContact = angular.copy(contact);
            _this.contact = contact;
          })
          .error(function (error) {
            _this.hasError = true;
            _this.errorMsg = error.msg;
          });
      } else {
        _this.originalContact = {};
        _this.contact = {};
      }
    },
    save: function () {
      var _this = this;

      _this.contactsService.saveContact(_this.contact)
        .success(function () {
          _this.$location.path('/');
        }).error(function (result) {

          _.each(result.errors, function (error, key) {
            if (_.isUndefined(_this.form[key])) {
              return;
            }

            //
            // Setting form validity
            //
            _this.form[key].$dirty = true;
            _this.form[key].$setValidity(error.type, false);
          });
        });
    },
    delete: function () {
      var _this = this;

      _this.contactsService.deleteContact(_this.contact._id)
        .success(function () {
          _this.$location.path('/');
        }).error(function (error) {
          if (angular.isUndefined(error)) return;

          _this.hasError = true;
          _this.errorMsg = 'There was a problem trying to delete this contact: ' + (error.msg || error.message);
        });
    },
    cancelChanges: function () {
      this.contact = angular.copy(this._originalContact);

      //
      // Resetting form error state
      //
      this.form.$setPristine();
    },
    getValidityClasses: function (controlName) {
      var classes = [],
        ctrl = this.form[controlName];

      if (_.isUndefined(ctrl)) {
        return classes;
      }

      if (ctrl.$dirty) {
        classes.push('has-feedback');
        classes.push(ctrl.$valid ? 'has-success' : 'has-error');
      }

      return classes;
    },
    getValidityIcon: function (controlName) {
      var ctrl = this.form[controlName];

      if (ctrl) {
        return ctrl.$valid ? 'glyphicon-ok' : 'glyphicon-remove';
      }
    }
  });

  angular.module('ngContactsApp')
    .controller('contactCtrl', ContactCtrl);

}());