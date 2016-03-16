import angular from 'angular';
import uiRouter from 'ui-router';
import appConsole from './console/index';
import appHome from './home/index';

const app = angular.module('app', [uiRouter, appConsole, appHome]);

app.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/console');

  // $stateProvider.state('Console', {
  //   url: '/console',
  //   controller: 'ConsoleController',
  //   template: require('./console/template/index.html')
  // });
});
