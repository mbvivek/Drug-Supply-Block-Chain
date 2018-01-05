import { TestBed, inject } from '@angular/core/testing';

import { UportService } from './uport.service';

describe('UportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UportService]
    });
  });

  it('should be created', inject([UportService], (service: UportService) => {
    expect(service).toBeTruthy();
  }));
});
