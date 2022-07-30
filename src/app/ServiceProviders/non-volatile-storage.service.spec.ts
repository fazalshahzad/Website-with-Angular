import { TestBed } from '@angular/core/testing';

import { NonVolatileStorageService } from './non-volatile-storage.service';

describe('NonVolatileStorageService', () => {
  let service: NonVolatileStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonVolatileStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
