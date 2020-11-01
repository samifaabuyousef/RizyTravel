import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Tour } from '../_model/Tour';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { TourRequestService } from '../_services/tour-request.service';
import { TourRequest } from '../_model/TourRequest';


@Injectable()
export class TourRequestDetailResolver implements Resolve<TourRequest> {

    constructor(
        private tourRequestService: TourRequestService,
        private router: Router,
        private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<TourRequest> {
            // tslint:disable-next-line:no-string-literal
            return this.tourRequestService.getTourRequest(route.params['id']);
        }
}
