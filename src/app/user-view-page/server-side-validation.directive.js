(() => {
  angular
    .module('app')
    .directive('serverSideValidation', function(apiService) {
      let pendingRequest;
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
          scope.$watch(attr.ngModel, function(value) {
            if (pendingRequest) clearTimeout(pendingRequest);
            pendingRequest = setTimeout(function() {
              apiService.validateFormField(attr.name, value)
                .then(response => {
                  console.log("---> response", response);
                  scope.$apply(() => {
                    ctrl.$setValidity('serverSideValidationError', response.isValid);
                    ctrl.$error.errorMessage = response.errorMessage;
                  });
                });
            }, 200);
          })
        }
      }
    });
})();