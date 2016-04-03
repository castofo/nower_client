(function() {
  'use strict';

  angular
    .module('nowerClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
