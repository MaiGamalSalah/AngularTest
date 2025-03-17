import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { recipegGuard } from './recipeg.guard';

describe('recipegGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => recipegGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
