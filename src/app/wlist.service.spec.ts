import { TestBed } from '@angular/core/testing';

import { WlistService } from './wlist.service';

describe('WlistService', () => {
  let service: WlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
