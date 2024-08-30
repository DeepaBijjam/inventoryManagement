import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

// import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('isAuthenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => IsAuthenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
