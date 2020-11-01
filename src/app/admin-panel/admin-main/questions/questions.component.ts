import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/_model/Question';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
import { NgForm } from '@angular/forms';
import { EditQuestionComponent } from './edit-question/edit-question.component';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  model: any = {};
  question: Question;
  questionToUpdate: Question;
  newStatus = 'Reviewed';
  public questions: Question[];
  searchKey: string;
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'created', 'questionText', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>();
  index: number;
  // id: number;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private questionService: QuestionService,
              private alertify: AlertifyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getQuestions();

  }

  onClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe(response => {
      this.questions = response;
      this.dataSource = new MatTableDataSource<any>(this.questions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.refreshTable();
    }, error => {
      console.log('error in loading');
    });
  }
  sendQuestion(id) {
    this.questionService.getQuestion(id).subscribe( res => {
      this.question = res;
      console.log(this.question);

    });
  }


  EditQuestion(id, name, phone, email,  created ,  questionText , status) {
    // console.log(id, name, phone, email,  created ,  questionText , status);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '20%';
    dialogConfig.data = {id, name, phone, email,  created ,  questionText , status};
    const dialogRef = this.dialog.open(EditQuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.getQuestions();
      this.refreshTable();
    });
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
