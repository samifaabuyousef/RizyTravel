import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from '../_model/Passenger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  baseUrl = 'http://localhost:5000/api/passengers/';

constructor(private http: HttpClient) { }

addPassenger(passenger: Passenger) {
  return this.http.post(this.baseUrl + 'addPassenger', passenger);
}

getPassengers(): Observable<Passenger[]> {
  return this.http.get<Passenger[]>(this.baseUrl);
}
deletePassenger(id: number) {
  return this.http.delete(this.baseUrl + id);
}
getPassenger(id): Observable<Passenger> {
  return this.http.get<Passenger>(this.baseUrl + id);
}

}
