import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Tour } from '../_model/Tour';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Passenger } from '../_model/Passenger';
import { PassengerService } from '../_services/passenger.service';


@Injectable()
export class PassengerDetailResolver implements Resolve<Passenger> {

    constructor(
        private passengerService: PassengerService,
        private router: Router,
        private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Passenger> {
            // tslint:disable-next-line:no-string-literal
            return this.passengerService.getPassenger(route.params['id']);
        }
}
