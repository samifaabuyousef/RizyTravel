import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../_services/question.service';
import { Question } from '../_model/Question';

@Component({
  selector: 'app-askus',
  templateUrl: './askus.component.html',
  styleUrls: ['./askus.component.css']
})
export class AskusComponent implements OnInit {
  question: Question;
  model: any = {};

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  AddQuestion() {
    this.questionService.addQuestion(this.model).subscribe( () => {
      console.log('Question has been added');
    }, error => {
      console.log(error);
    });
  }

}
