(function() {
  'use strict';

  angular
    .module('nower')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(loginService, $cookies) {
    var vm = this;
    vm.user = {};

    function showSuccessToastr() {
      toastr.success("Loguiado");
    }
    function showErrorToastr(info) {
      toastr.error(info);
    }

    vm.submit = function() {
      loginService.login(vm.user)
        .then(function(response) {
          console.log(response.data);
          $cookies.put("token", response.data.token);
          showSuccessToastr();
        }, function(response) {
          console.log(response.data);
          showErrorToastr(response.status);
        });
    };
  }
})();
