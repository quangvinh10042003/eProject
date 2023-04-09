import { TestBed } from '@angular/core/testing';

import { IntColorService } from './int-color.service';

describe('IntColorService', () => {
  let service: IntColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
