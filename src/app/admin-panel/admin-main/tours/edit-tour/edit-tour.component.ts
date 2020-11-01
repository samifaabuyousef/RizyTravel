import { Component, OnInit, Inject, ViewChild, HostListener } from '@angular/core';
import { TourService } from 'src/app/_services/tour.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Tour } from 'src/app/_model/tour';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  tour: Tour;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotifications($event: any) {
    if ( this.editForm.dirty ) {
      $event.returnValue = true;
    }
  }

  constructor(private tourService: TourService,
              private alertify: AlertifyService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line:no-string-literal
      this.tour = data['tour'];
    });
    // this.resetForm();
  }

  updateTour() {
    this.tourService.updateTour(this.tour.id, this.tour)
      .subscribe(next => {
        this.alertify.success('The Tour Updated Succefully');
        this.editForm.reset(this.tour);
      }, error => {
        this.alertify.error(error);
      });

  }
  updateMainPhoto(photoUrl) {
    this.tour.photoUrl = photoUrl;
  }

  // resetForm(addTour?: NgForm) {
  //   if (addTour != null) {
  //     addTour.resetForm();
  //   } else {
  //     this.model = {
  //       id: this.data.id,
  //       tourName: this.data.tourName,
  //       discription: this.data.discription,
  //       photoUrl: this.data.photoUrl,
  //       tourStatus: this.data.tourStatus
  //     };
  //   }
  // }



  // updateRecord(addTour?: NgForm) {
  //   this.tourService.putTour(this.model).subscribe(res => {
  //     this.alertify.success('Updated successfully');
  //     this.resetForm(addTour);
  //     this.dialogRef.close();
  //   });

  // }
}
