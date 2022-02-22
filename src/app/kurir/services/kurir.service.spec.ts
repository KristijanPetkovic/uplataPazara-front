import { TestBed } from '@angular/core/testing';

import { KurirService } from './kurir.service';

describe('KurirService', () => {
  let service: KurirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KurirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
