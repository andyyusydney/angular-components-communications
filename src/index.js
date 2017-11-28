import angular from 'angular';
import './index.scss';

import formModule from './form/formModule';

angular.module('main', [
  formModule
]);

angular.bootstrap(document.documentElement, ['main']);