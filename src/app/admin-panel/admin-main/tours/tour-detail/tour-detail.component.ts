import { Component, OnInit, ViewChild } from '@angular/core';
import { TourService } from 'src/app/_services/tour.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Tour } from 'src/app/_model/tour';
import { TabsetComponent } from 'ngx-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Stage } from 'src/app/_model/Stage';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  tour: Tour;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  stages: Stage[];
  constructor( private tourService: TourService,
               private route: ActivatedRoute,
               private alertify: AlertifyService) { }
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
    console.log(this.tour);
    this.stages = this.getStages();
  }
getStages() {
  const stagesDetails = [];
  // tslint:disable-next-line:prefer-for-of
  for ( let i = 0; i < this.tour.stages.length ; i++) {
    stagesDetails.push({
      id: this.tour.stages[i].id,
      stageName: this.tour.stages[i].stageName,
      description: this.tour.stages[i].description,
      startDate: this.tour.stages[i].startDate,
      endDate: this.tour.stages[i].endDate
    });
  }
  return stagesDetails;
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


selectTab(tabId: number) {
  this.staticTabs.tabs[tabId].active = true;
}

}
