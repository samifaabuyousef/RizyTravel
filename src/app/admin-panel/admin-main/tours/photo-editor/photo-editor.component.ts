import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/_model/Photo';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { TourService } from 'src/app/_services/tour.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/app/_model/tour';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getTourPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;
  tour: Tour;

  constructor(private tourService: TourService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTour();
    this.initializeUploader();
  }
  getTour() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.tour = data['tour'];
    });
  }


  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'tour/' + this.tour.id + '/photos',
      // authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
  }
  };
  }

  setMainPhoto(photo: Photo) {
    this.tourService.setMainPhoto(this.tour.id, photo.id).subscribe( () => {
      this.currentMain = this.photos.filter(p => p.isMain === true)[0];
      this.currentMain.isMain = false;
      photo.isMain = true;
      this.getTourPhotoChange.emit(photo.url);
    }, error => {
      this.alertify.error(error);
    });
  }

  deletePhoto(id: number) {
    this.alertify.confirm('Are You Sure You Want To Delete The Photo', () => {
      this.tourService.deletePhoto(this.tour.id, id).subscribe( () => {
        this.photos.splice(this.photos.findIndex( p => p.id === id), 1);
        this.alertify.success('The Photo has been deleted successfully');
      }, error => {
        this.alertify.error('Failed to delete');
      });
    });
  }

}
