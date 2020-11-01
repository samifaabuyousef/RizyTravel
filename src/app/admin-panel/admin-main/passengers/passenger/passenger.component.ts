import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/_services/tour.service';
import { Tour } from 'src/app/_model/tour';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Passenger } from 'src/app/_model/Passenger';
import { MatDialogRef } from '@angular/material';
import { PassengerService } from 'src/app/_services/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  public tours: Tour[];
  model: any = {};
  passengerFromForm: any;
  passenger: Passenger;
  tour: any;
  constructor(private tourService: TourService,
              private passengerService: PassengerService,
              private alertify: AlertifyService,
              public dialogRef: MatDialogRef<PassengerComponent>) { }

  ngOnInit() {
    this.getTours();
  }
  getTours() {
    this.tourService.getTours().subscribe(response => {
      this.tours = response;
    }, error => {
      this.alertify.error(error);
    });
  }

  addPassenger() {
    this.passengerService.addPassenger(this.model).subscribe( () => {
      this.alertify.success('The Passenger has been added');
      this.dialogRef.close();
    }, error => {
      this.alertify.error(error);
    });
  }

}
