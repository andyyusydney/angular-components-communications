import angular from 'angular';
import 'angular-mocks';

import checkboxModule from './checkboxModule';
import CheckboxController from './CheckboxController';

describe('Component: checkbox', function () {
  beforeEach(angular.mock.module(checkboxModule));
 
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile){
    const changeHandler = () => {}

    scope = $rootScope.$new();
    
    element = angular.element('<checkbox id="id" label="label" value="value" change="change"></checkbox>');
    element = $compile(element)(scope);
    scope.id = 1;
    scope.label = 'checkbox A';
    scope.value = true;
    scope.change = changeHandler;
    scope.$apply();
  }));
 
  it('should render the text', function() {
    var label = element.find('label');
    //console.log('label=', label);
    expect(label.text().indexOf('checkbox A') !== -1).toBe(true);
    expect(label.attr('for')).toEqual('1');
  });

  it('should update the rendered text when the parent scope changes', function() {
      scope.label = 'checkbox B';
      scope.$apply();
      var label = element.find('label');
      expect(label.text().indexOf('checkbox B') !== -1).toBe(true);
  });
});