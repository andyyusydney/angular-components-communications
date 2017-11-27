import angular from 'angular';

import 'angular/angular-csp.css';
import './index.scss';

//import demoModule from './demo/demoModule';
import formModule from './form/formModule';

angular.module('main', [
  formModule
]);

angular.bootstrap(document.documentElement, ['main']);

