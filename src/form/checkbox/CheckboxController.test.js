import angular from 'angular';
import 'angular-mocks';

import checkboxModule from './checkboxModule';
import CheckboxController from './CheckboxController';

describe('Controller: ', function() {
  beforeEach(angular.mock.module(checkboxModule));

  var checkboxController; 
  var scope;
  // Initialize the controller and a mock scope.
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    checkboxController = $controller(CheckboxController, {
      $scope: scope
    });
  }));

  describe('CheckboxController', function() {
    it('should expose a method of clickHandler', function() {
      expect(checkboxController.clickHandler).toBeDefined();
      expect(angular.isFunction(checkboxController.clickHandler)).toBe(true);
    });
  });

  describe('CheckboxController in component', function () {

    var checkboxController;
    var scope;
    beforeEach(inject(function($rootScope, $componentController){
      scope = $rootScope.$new();
      checkboxController = $componentController('checkbox', {$scope: scope}, {change: () => {
        return () => {};
      }});
    }));

    it('should be attached to the scope', function() {
      expect(scope.checkbox).toBe(checkboxController);
    });

    it('should call change()', function() {
      spyOn(checkboxController, 'change').and.callFake(function() {
        return () => {};
      });

      checkboxController.clickHandler();

      expect(checkboxController.change).toHaveBeenCalled();
    });
  });

});