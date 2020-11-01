import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { TourService } from 'src/app/_services/tour.service';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/app/_model/tour';
import { Stage } from 'src/app/_model/Stage';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-stages-editor',
  templateUrl: './stages-editor.component.html',
  styleUrls: ['./stages-editor.component.css']
})
export class StagesEditorComponent implements OnInit {
  tour: Tour;
  stages: Stage[];
  stageForms: FormArray = this.fb.array([]);

  constructor( private fb: FormBuilder,
               private tourService: TourService,
               private route: ActivatedRoute,
               private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.tour = data['tour'];

  });

    this.stages = this.getStages();
    this.stages.forEach((stage: Stage) => {
      this.stageForms.push(this.fb.group({
        id: [stage.id],
        stageName: [stage.stageName, Validators.required],
        description: [stage.description, Validators.required],
        startDate: [stage.startDate, Validators.required],
        endDate: [stage.endDate, Validators.required]
      }));
    });
    // this.addStageForm();
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

  addStageForm() {
    this.stageForms.push(this.fb.group({
    id: [0],
    stageName: ['', Validators.required],
    description: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required]
    }));
  }


  recordSubmit( fg: FormGroup) {
    if (fg.value.id === 0) {
      this.tourService.addStage(this.tour.id, fg.value).subscribe( (res: any) => {
        this.alertify.success('The Stage has been added');
        fg.patchValue({ id : res.id});
      }, error => {
        this.alertify.error('error');
      });
    } else {
      this.tourService.updateStage(this.tour.id, fg.value).subscribe( (res: any) => {
        console.log(fg.value);
        this.alertify.success('The Stage Updated Succefully');
      });
    }

    }

    deleteStage(id, i) {
      if (id === 0) {
        this.stageForms.removeAt(i);
      } else if (confirm('Are you sure to delete this record ?')) {
        this.tourService.deleteStage(this.tour.id, id).subscribe( res => {
          this.stageForms.removeAt(i);
        });
      }
      }



}
