import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tour } from '../_model/tour';
import { Stage } from '../_model/Stage';
import { Passenger } from '../_model/Passenger';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  baseUrl = 'http://localhost:5000/api/tour/';
  base = environment.apiUrl;

constructor(private http: HttpClient) { }

addTour(tour: Tour) {
  return this.http.post(this.baseUrl + 'addtour', tour);
}
getTours(): Observable<Tour[]> {
  return this.http.get<Tour[]>(this.baseUrl);
}

getTour(id): Observable<Tour> {
  return this.http.get<Tour>(this.baseUrl + id);
}

deleteTour(id: number) {
  return this.http.delete(this.baseUrl + id);
}
updateTour(id: number , tour: Tour) {
  return this.http.put(this.baseUrl + id , tour);
}
setMainPhoto(tourId: number, id: number) {
  return this.http.post(this.baseUrl + tourId + '/photos/' + id + '/setMain', {});
}
deletePhoto(tourId: number, id: number) {
  return this.http.delete(this.baseUrl + tourId + '/photos/' +  id);
}

addStage(id: number , model: any) {
  return this.http.post(this.baseUrl + id + '/stages', model);
}
updateStage(id: number , model: any) {
  return this.http.put(this.baseUrl + id + '/stages/' + model.id , model);
}
deleteStage(tourId: number, id: number) {
  return this.http.delete(this.baseUrl + tourId + '/stages/' +  id);
}

addPassenger(id: number , passenger: Passenger) {
  return this.http.post(this.baseUrl + id + '/passengers', passenger);
}

}
