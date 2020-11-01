/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TourRequestService } from './tour-request.service';

describe('Service: TourRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourRequestService]
    });
  });

  it('should ...', inject([TourRequestService], (service: TourRequestService) => {
    expect(service).toBeTruthy();
  }));
});
