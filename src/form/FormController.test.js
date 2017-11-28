import angular from 'angular';
import 'angular-mocks';

import formModule from './formModule';
import FormController from './FormController';

const { module, inject } = angular.mock;

describe('FormController', () => {
  beforeEach(module(formModule));

  let $controller;

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_;
  }));


  it('has checkboxes property, and it is non empty array', () => {
    const controller = $controller(FormController, {});

    expect(controller.checkboxes).toBeTruthy();
    expect(controller.checkboxes.length).toBe(2);
  });
});
