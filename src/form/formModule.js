import angular from 'angular';
import formComponent from './formComponent';
import checkboxModule from './checkbox/checkboxModule';

export default angular
  .module('form', [checkboxModule])
  .component('formHome', formComponent)
  .name;

