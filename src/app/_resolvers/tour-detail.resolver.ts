import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Tour } from '../_model/Tour';
import { Injectable } from '@angular/core';
import { TourService } from '../_services/tour.service';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TourDetailResolver implements Resolve<Tour> {

    constructor(
        private tourService: TourService,
        private router: Router,
        private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Tour> {
            // tslint:disable-next-line:no-string-literal
            return this.tourService.getTour(route.params['id']);
        }
}
