import angular from 'angular';
import uiRouter from 'ui-router';
import appConsole from './console/index';
import appHome from './home/index';

const app = angular.module('app', [uiRouter, appConsole, appHome]);

app.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/console');

  // .state('Home', {
  //   parent: 'console',
  //   url: '/console/home',
  //   controller: 'HomeController',
  //   templateUrl: '/home/template/index.html'
  // });
});
