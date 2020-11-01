import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/_model/Video';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { VideoServiceService } from 'src/app/_services/video-service.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  model: any = {};
  video: Video;
  addVideo: FormGroup;
  constructor(private videoService: VideoServiceService,
              private route: ActivatedRoute,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<VideoComponent>) { }

  ngOnInit() {
    this.createAddVideoForm();
  }

  createAddVideoForm() {
    this.addVideo = this.fb.group({
      videoName: ['', Validators.required],
      description: ['', Validators.required],
      videoUrl: ['', Validators.required]
    });
  }

  add() {
    if (this.addVideo.valid) {
      this.video = Object.assign({}, this.addVideo.value);
      this.videoService.addVideo(this.video).subscribe( () => {
        this.alertify.success('Video has been added');
        this.dialogRef.close();
      }, error => {
        this.alertify.error(error);
      }
    );
  }}

}
