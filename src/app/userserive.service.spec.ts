import { TestBed } from '@angular/core/testing';

import { UserseriveService } from './userserive.service';

describe('UserseriveService', () => {
  let service: UserseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
