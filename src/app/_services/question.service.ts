import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../_model/Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl = 'http://localhost:5000/api/question/';

constructor(private http: HttpClient) { }
addQuestion(question: Question) {
  return this.http.post(this.baseUrl + 'addquestion', question);
}

getQuestions(): Observable<Question[]> {
  return this.http.get<Question[]>(this.baseUrl);
}

getQuestion(id): Observable<Question> {
  return this.http.get<Question>(this.baseUrl + id);
}


deleteQuestion(id: number) {
  return this.http.delete(this.baseUrl + id);
}
updateQuestion(id: number , model: any) {
  return this.http.put(this.baseUrl + id , model);
}


}
