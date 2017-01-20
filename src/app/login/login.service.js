(function() {
  'use strict';

  angular
    .module('nower')
    .factory('loginService', loginService);

  /** @ngInject */
  function loginService($http) {

    function login(user) {
      return $http.post('http://api.dev.nower.co/v1/admins/login', user);
    }

    return {
      'login': login
    };
  }
})();
