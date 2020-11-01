import { Component, OnInit, Inject } from '@angular/core';
import { Question } from 'src/app/_model/Question';
import { QuestionService } from 'src/app/_services/question.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  formData: Question;
  recievedRow: any;

  constructor(private questionService: QuestionService,
              private alertify: AlertifyService,
              @Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<EditQuestionComponent>) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      id: this.data.id,
      name: this.data.name,
      phone: this.data.phone,
      email: this.data.email,
      created: this.data.created,
      questionText: this.data.questionText,
      status: this.data.status
    };
  }

  onSumbit(form: NgForm) {
    this.questionService.updateQuestion(form.value.id, form.value).subscribe(res => {
      this.alertify.success('Updated successfully');
      this.resetForm(form);
      this.dialogRef.close();
    });

  }

}
