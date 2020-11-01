import { Component, OnInit } from '@angular/core';
import { TourService } from '../_services/tour.service';
import { Tour } from '../_model/tour';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  public tours: Tour[];
  Tours = [
    {Image: '../../assets/CarouselImages/post-1.jpg', Title: 'Tour 1', Status: 'Opened'},
    {Image: '../../assets/CarouselImages/post-5.png', Title: 'Tour 2', Status: 'Opened'},
    {Image: '../../assets/CarouselImages/post-7.jpg', Title: 'Tour 3', Status: 'Closed'},
    {Image: '../../assets/CarouselImages/post-5.png', Title: 'Tour 4', Status: 'Opened'}
  ];
  SlideOptions = { items: 3,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000 ,
  dots: true,
  nav: false,
  responsive : {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
  }
};


  constructor( private tourService: TourService) { }

  ngOnInit() {
    this.getTours();
  }
  getTours() {
    this.tourService.getTours().subscribe( (tours: Tour[]) => {
      this.tours = tours;
    }, error => {
      console.log(error);
    });
  }

}
