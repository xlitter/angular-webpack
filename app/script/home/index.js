import ctrl from './controller/home';
import router from './router/router';

export default angular.module('app.home', [])
  .config(router)
  .controller('HomeController', ctrl).name;
