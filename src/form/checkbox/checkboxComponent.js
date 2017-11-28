import './checkbox.scss';
import CheckboxController from './CheckboxController';

/* @ngInject */
export default {
	bindings: {
		id: '<',		
		label: '<',
		value: '=',
		change: '&'
	},
    controller: CheckboxController,
    controllerAs: 'checkbox',
    template: require('./checkbox.html'),
}
