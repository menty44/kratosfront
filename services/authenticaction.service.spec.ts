import { TestBed } from '@angular/core/testing';

import { AuthenticactionService } from './authenticaction.service';

describe('AuthenticactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticactionService = TestBed.get(AuthenticactionService);
    expect(service).toBeTruthy();
  });
});
