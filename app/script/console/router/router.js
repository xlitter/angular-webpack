const tpl = require('../template/index.html');

export default function router($stateProvider) {
  $stateProvider
    .state('Console', {
      url: '/console',
      controller: 'ConsoleController',
      template: tpl
    });
}

router.$inject = ['$stateProvider'];
