/**
 * Created by Josh on 7/7/14.
 */
(function () {
  'use strict';

  var AgeFilter = function () {
    return function (input) {
      var dob = moment(input),
        now = moment();

      if (!dob.isValid()) {
        return input;
      }

      return now.diff(dob, 'years');
    };
  };

  angular.module('ngContactsApp')
    .filter('age', AgeFilter);

}());