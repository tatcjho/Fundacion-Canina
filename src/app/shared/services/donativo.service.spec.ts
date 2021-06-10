import { TestBed } from '@angular/core/testing';

import { DonativoService } from './donativo.service';

describe('DonativoService', () => {
  let service: DonativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
