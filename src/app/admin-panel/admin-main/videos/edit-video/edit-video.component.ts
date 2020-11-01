import { Component, OnInit, Inject } from '@angular/core';
import { Video } from 'src/app/_model/Video';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { VideoServiceService } from 'src/app/_services/video-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {
  formData: Video;
  recievedRow: any;
  constructor(private videoService: VideoServiceService,
              private alertify: AlertifyService,
              @Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<EditVideoComponent>) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      id: this.data.id,
      videoName: this.data.videoName,
      description: this.data.description,
      videoUrl: this.data.videoUrl,
      created: this.data.created

    };
  }

  onSumbit(form: NgForm) {
    this.videoService.updateVideo(form.value.id, form.value).subscribe(res => {
      this.alertify.success('Updated successfully');
      this.resetForm(form);
      this.dialogRef.close();
    });

  }

}
