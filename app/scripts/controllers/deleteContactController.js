/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

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
    .controller('DeleteContactCtrl', DeleteContactCtrl);

}());