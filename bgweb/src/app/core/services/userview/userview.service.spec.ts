import { TestBed, inject } from '@angular/core/testing';

import { UserViewService } from './userview.service';

describe('UserviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserViewService]
    });
  });

  it('should be created', inject([UserViewService], (service: UserViewService) => {
    expect(service).toBeTruthy();
  }));
});
