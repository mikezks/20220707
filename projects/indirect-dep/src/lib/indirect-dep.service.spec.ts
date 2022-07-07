import { TestBed } from '@angular/core/testing';

import { IndirectDepService } from './indirect-dep.service';

describe('IndirectDepService', () => {
  let service: IndirectDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndirectDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
