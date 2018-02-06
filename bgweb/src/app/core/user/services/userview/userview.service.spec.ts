import { TestBed, inject } from '@angular/core/testing';

import { UserviewService } from './userview.service';

describe('UserviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserviewService]
    });
  });

  it('should be created', inject([UserviewService], (service: UserviewService) => {
    expect(service).toBeTruthy();
  }));
});
