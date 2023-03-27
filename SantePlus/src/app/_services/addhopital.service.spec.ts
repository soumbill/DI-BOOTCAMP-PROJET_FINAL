import { TestBed } from '@angular/core/testing';

import { AddhopitalService } from './addhopital.service';

describe('AddhopitalService', () => {
  let service: AddhopitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhopitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
