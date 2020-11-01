import { Component, OnInit, Inject } from '@angular/core';
import { TourService } from 'src/app/_services/tour.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Tour } from 'src/app/_model/tour';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  model: any = {};
  tour: Tour;
  addTour: FormGroup;

  constructor( private tourService: TourService,
               private route: ActivatedRoute,
               private alertify: AlertifyService,
               private fb: FormBuilder,
               @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<TourComponent> ) { }

  ngOnInit() {
    this.createAddTourForm();
  }
  createAddTourForm() {
    this.addTour = this.fb.group({
      tourName: ['', Validators.required],
      description: ['', Validators.required],
      tourStatus: ['', Validators.required]
    });
  }


  add() {
    // this.tourService.addTour(this.model).subscribe( () => {
    //   console.log('tour has been added');
    //   this.dialogRef.close();
    // }, error => {
    //   console.log('failed to add tour');
    // });
    if (this.addTour.valid) {
      this.tour = Object.assign({}, this.addTour.value);
      this.tourService.addTour(this.tour).subscribe( () => {
        this.alertify.success('tour has been added');
        this.dialogRef.close();
      }, error => {
        this.alertify.error(error);
      }
    );
  }}

}
