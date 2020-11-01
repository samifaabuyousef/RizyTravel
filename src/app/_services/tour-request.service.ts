import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TourRequest } from '../_model/TourRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourRequestService {
  baseUrl = 'http://localhost:5000/api/request/';

constructor(private http: HttpClient) { }
addRequest(tourRequest: TourRequest) {
  return this.http.post(this.baseUrl + 'addquestion', tourRequest);
}

getTourRequests(): Observable<TourRequest[]> {
  return this.http.get<TourRequest[]>(this.baseUrl);
}

getTourRequest(id): Observable<TourRequest> {
  return this.http.get<TourRequest>(this.baseUrl + id);
}

deleteRequest(id: number) {
  return this.http.delete(this.baseUrl + id);
}

updateRequest(id: number , model: any) {
  return this.http.put(this.baseUrl + id , model);
}

}
