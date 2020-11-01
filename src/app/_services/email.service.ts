import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../_model/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
baseUrl = 'http://localhost:5000/api/emails/';
constructor(private http: HttpClient) { }
addEmail(email: Email) {
  return this.http.post(this.baseUrl + 'addemail', email);
}

getEmails(): Observable<Email[]> {
  return this.http.get<Email[]>(this.baseUrl);
}

getEmail(id): Observable<Email> {
  return this.http.get<Email>(this.baseUrl + id);
}

deleteEmail(id: number) {
  return this.http.delete(this.baseUrl + id);
}

}
