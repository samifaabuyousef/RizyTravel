import { Component, OnInit, Inject } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { TourRequestService } from 'src/app/_services/tour-request.service';
import { TourRequest } from 'src/app/_model/TourRequest';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {
  model: any = {};
  formData: TourRequest;
  constructor(private tourRequestService: TourRequestService,
              private alertify: AlertifyService,
              @Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<AddrequestComponent>) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      id: null,
      name: '',
      nationalIdNumber: null,
      passportNumber: null,
      phone: null,
      email: '',
      address: '',
      dateOfBirth: null,
      nationality: '',
      tourName : this.data.tourName,
      status: ''
    };
  }

  onSumbit(form: NgForm) {
    this.tourRequestService.addRequest(form.value).subscribe(res => {
      this.alertify.success('Thankx For Your Request We will Call You soon');
      this.resetForm(form);
      this.dialogRef.close();
    });

  }

}
