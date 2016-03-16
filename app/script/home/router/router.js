const tpl = require('../template/index.html');

export default function router($stateProvider) {
  $stateProvider
    .state('Home', {
      parent: 'Console',
      url: '/home',
      controller: 'HomeController',
      template: tpl
    });
}

router.$inject = ['$stateProvider'];
