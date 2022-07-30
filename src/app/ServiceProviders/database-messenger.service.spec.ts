import { TestBed } from '@angular/core/testing';

import { DatabaseMessengerService } from './database-messenger.service';

describe('DatabaseMessengerService', () => {
  let service: DatabaseMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
