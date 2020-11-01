import { Component, OnInit } from '@angular/core';
import { TourService } from '../_services/tour.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Tour } from '../_model/tour';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddrequestComponent } from './addrequest/addrequest.component';

@Component({
  selector: 'app-join-tour',
  templateUrl: './join-tour.component.html',
  styleUrls: ['./join-tour.component.css']
})
export class JoinTourComponent implements OnInit {
  tour: Tour;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private tourService: TourService,
              private route: ActivatedRoute,
              private alertify: AlertifyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.tour = data['tour'];
  });
    this.galleryOptions = [
     {
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
      }
  ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.tour.photos.length; i++) {
      imageUrls.push({
        small: this.tour.photos[i].url,
        medium: this.tour.photos[i].url,
        big: this.tour.photos[i].url,
        description: this.tour.photos[i].description
      });
    }
    return imageUrls;
  }

  JoinRequest(tourName: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
    dialogConfig.data = {tourName};
    const dialogRef = this.dialog.open(AddrequestComponent, dialogConfig);
  }
}
