import { TestBed } from '@angular/core/testing';

import { ApiUrlsServiceService } from './api-urls-service.service';

describe('ApiUrlsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUrlsServiceService = TestBed.get(ApiUrlsServiceService);
    expect(service).toBeTruthy();
  });
});
