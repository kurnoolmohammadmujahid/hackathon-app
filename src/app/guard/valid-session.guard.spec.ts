import { TestBed } from '@angular/core/testing';

import { ValidSessionGuard } from './valid-session.guard';

describe('ValidSessionGuard', () => {
  let guard: ValidSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
