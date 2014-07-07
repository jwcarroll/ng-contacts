/**
 * Created by Josh on 6/28/14.
 */
(function () {
  'use strict';

  var ContactCtrl = function (contactsService, $location, $routeParams, $modal) {
    var _this = this;

    _this.contactsService = contactsService;
    _this.$location = $location;
    _this.$routeParams = $routeParams;
    _this.$modal = $modal;

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
    }else{
      _this.originalContact = {};
      _this.contact = {};
    }
  };
  ContactCtrl.$inject = ['contactsService', '$location', '$routeParams', '$modal'];

  angular.extend(ContactCtrl.prototype, {
    contact: {},
    _originalContact: {},
    hasError: false,
    errorMsg: '',
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

            _this.form[key].$dirty = true;
            _this.form[key].$setValidity(error.type, false);
          });
        });
    },
    delete: function () {
      var _this = this,
        modalInstance = _this.$modal.open({
          templateUrl: 'partials/ok-cancel-dialog',
          controller: 'DeleteContactCtrl as modal'
        });

      modalInstance.result
        .then(function () {
          return _this.contactsService.deleteContact(_this.contact._id);
        }
      ).then(function () {
          _this.$location.path('/');
        }, function (result) {

          if(angular.isUndefined(result || result.data)) return;

          var error = result.data;

          _this.hasError = true;
          _this.errorMsg = 'There was a problem trying to delete this contact: ' + (error.msg || error.message);
        });
    },
    cancelChanges: function () {
      this.contact = angular.copy(this._originalContact);
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

  var DeleteContactCtrl = function ($modalInstance) {
    this.$modalInstance = $modalInstance;
  };
  DeleteContactCtrl.$inject = ['$modalInstance'];

  angular.extend(DeleteContactCtrl.prototype, {
    title: 'Delete Contact?',
    text: 'Are you sure you want to delete this contact?',
    dismissButtonText: 'Cancel',
    closeButtonText: 'OK',
    dismiss: function(){
      return this.$modalInstance.dismiss();
    },
    close: function(){
      return this.$modalInstance.close();
    }
  });

  angular.module('ngContactsApp')
    .controller('DeleteContactCtrl', DeleteContactCtrl)
    .controller('ContactCtrl', ContactCtrl);
}());