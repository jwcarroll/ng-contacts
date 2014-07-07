/**
 * Created by Josh on 6/28/14.
 */
(function () {
  'use strict';

  angular.module('ngContactsApp')
    .filter('age', function () {
      return function (input) {
        var dob = moment(input),
            now = moment();

        if(!dob.isValid()){
          return input;
        }

        return now.diff(dob, 'years');
      };
    });
}());