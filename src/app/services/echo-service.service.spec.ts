import { TestBed } from '@angular/core/testing';

import { EchoServiceService } from './echo-service.service';

describe('EchoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EchoServiceService = TestBed.get(EchoServiceService);
    expect(service).toBeTruthy();
  });
});
