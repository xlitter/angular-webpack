import ctrl from '../controller/home';
const tpl = require('../template/index.html');

export default function router($stateProvider) {
  $stateProvider
    .state('Home', {
      parent: 'Console',
      url: '/home',
      controller: ctrl.name,
      template: tpl
    });
}

router.$inject = ['$stateProvider'];
