import { TestBed } from '@angular/core/testing';

import { HappyHourService } from './happy-hour.service';

describe('HappyHourService', () => {
  let service: HappyHourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HappyHourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
