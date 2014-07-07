/**
 * Created by Josh on 7/4/14.
 */
(function () {

  function isNullOrEmpty(val) {
    return val === null || val.trim() === "";
  }

  var DatePicker = function () {

    var formats = {
      kendo:'M/d/yyyy',
      moment:'M/D/YYYY'
    };

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {

        ngModelCtrl.$render = function () {
          var dateObj = moment(ngModelCtrl.$viewValue || '');

          if(dateObj.isValid()){
            element.data("kendoDatePicker").value(dateObj.toDate());
          }
        };

        element.kendoDatePicker({format:formats.kendo});

        var picker = element.data("kendoDatePicker");

        picker.bind("change", function () {
          var newValue = this.value();
          var inputValue = this.element.val() || "";
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(newValue);
            var isBadFormat = newValue === null && inputValue.trim() !== "";
            ngModelCtrl.$setValidity('format', !isBadFormat);
          });
        });

        element.on("change", function () {
          var newVal = element.val(),
            isEmpty = isNullOrEmpty(newVal),
            parsed = moment(newVal);

          if (!parsed.isValid()) {
            ngModelCtrl.$setValidity('format', isEmpty);

            if (isEmpty) {
              ngModelCtrl.$setViewValue(null);
            } else {
              ngModelCtrl.$setViewValue('');
            }

            scope.$apply();
          } else {
            element.val(parsed.format(formats.moment));
          }
        });

      }
    };
  };

  angular.module('ngContactsApp')
    .directive('datePicker', DatePicker);

}());