const tpl = require('../template/index.html');
import ctrl from '../controller/console';

export default function router($stateProvider) {
  $stateProvider
    .state('Console', {
      url: '/console',
      controller: ctrl.name,
      template: tpl
    });
}

router.$inject = ['$stateProvider'];
