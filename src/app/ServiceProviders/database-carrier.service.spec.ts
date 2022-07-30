import { TestBed } from '@angular/core/testing';

import { DatabaseCarrierService } from './database-carrier.service';

describe('DatabaseCarrierService', () => {
  let service: DatabaseCarrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseCarrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
