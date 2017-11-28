import angular from 'angular';
import 'angular-mocks';

import formModule from './formModule';
import FormController from './FormController';

describe('Component: formComponent', function () {
  beforeEach(angular.mock.module(formModule));
 
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile){
    const changeHandler = () => {}
    const data =[
      {
        label: 'checkbox A',
        value: true,
        change: changeHandler
      },
      {
        label: 'checkbox B',
        value: false,
        change: changeHandler
      }
    ];
    scope = $rootScope.$new();
    element = angular.element('<form-home></form-home>');
    element = $compile(element)(scope);
    scope.checkboxes = data;
    scope.$apply();
  }));
 
  it('should render the text', function() {
    var form = element.find('form');
    //console.log('form=', form);
    expect(form.text().indexOf('checkbox A') !== -1).toBe(true);
  });
});