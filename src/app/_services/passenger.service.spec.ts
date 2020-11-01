/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PassengerService } from './passenger.service';

describe('Service: Passenger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengerService]
    });
  });

  it('should ...', inject([PassengerService], (service: PassengerService) => {
    expect(service).toBeTruthy();
  }));
});
