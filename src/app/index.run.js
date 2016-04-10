(function() {
  'use strict';

  angular
    .module('nower')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
