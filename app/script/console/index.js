import ConsoleController from './controller/console';
import router from './router/router';

export default angular.module('app.console', [])
  .config(router)
  .controller('ConsoleController', ConsoleController).name;
