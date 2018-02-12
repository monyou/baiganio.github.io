import { TestBed, inject } from '@angular/core/testing';

import { InitialUsersService } from './initial-users.service';

describe('InitialUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialUsersService]
    });
  });

  it('should be created', inject([InitialUsersService], (service: InitialUsersService) => {
    expect(service).toBeTruthy();
  }));
});
