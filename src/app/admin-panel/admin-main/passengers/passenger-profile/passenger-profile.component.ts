import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PassengerService } from 'src/app/_services/passenger.service';
import { Passenger } from 'src/app/_model/Passenger';
import { TourService } from 'src/app/_services/tour.service';
import { Tour } from 'src/app/_model/tour';
import { Stage } from 'src/app/_model/Stage';

@Component({
  selector: 'app-passenger-profile',
  templateUrl: './passenger-profile.component.html',
  styleUrls: ['./passenger-profile.component.css']
})
export class PassengerProfileComponent implements OnInit {
  passenger: Passenger;
  tour: Tour;

  constructor(private passengerService: PassengerService,
              private tourService: TourService,
              private alertify: AlertifyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line:no-string-literal
      this.passenger = data['passenger'];
    });
    this.getTourDetails();


  }
  getTourDetails() {
    this.tourService.getTour(this.passenger.tourId).subscribe( res => {
      this.tour = res;
    }, error => {
      this.alertify.error(error);
    });
  }

  // getStages() {
  //   const stagesDetails = [];
  //   // tslint:disable-next-line:prefer-for-of
  //   for ( let i = 0; i < this.tour.stages.length ; i++) {
  //     stagesDetails.push({
  //       id: this.tour.stages[i].id,
  //       stageName: this.tour.stages[i].stageName,
  //       description: this.tour.stages[i].description,
  //       startDate: this.tour.stages[i].startDate,
  //       endDate: this.tour.stages[i].endDate
  //     });
  //   }
  //   return stagesDetails;
  // }

}
