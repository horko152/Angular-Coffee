import { TestBed } from '@angular/core/testing';

import { TypecoffeeService } from './typecoffee.service';

describe('TypecoffeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypecoffeeService = TestBed.get(TypecoffeeService);
    expect(service).toBeTruthy();
  });
});
