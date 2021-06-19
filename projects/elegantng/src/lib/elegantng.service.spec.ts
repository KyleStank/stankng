import { TestBed } from '@angular/core/testing';

import { ElegantngService } from './elegantng.service';

describe('ElegantngService', () => {
  let service: ElegantngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElegantngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
