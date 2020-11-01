import { Component, OnInit, ViewChild } from '@angular/core';
import { Video } from 'src/app/_model/Video';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { VideoServiceService } from 'src/app/_services/video-service.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { VideoComponent } from './video/video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  model: any = {};
  video: Video;
  videoToUpdate: Video;
  public videos: Video[];
  searchKey: string;
  displayedColumns: string[] = ['id', 'videoName', 'videoUrl', 'description', 'created', 'actions'];
  dataSource = new MatTableDataSource<any>();
  index: number;
  // id: number;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private videoService: VideoServiceService,
              private alertify: AlertifyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getVideos();
  }


  onClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  getVideos() {
    this.videoService.getVideos().subscribe(response => {
      this.videos = response;
      this.dataSource = new MatTableDataSource<any>(this.videos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.refreshTable();
    }, error => {
      console.log('error in loading');
    });
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(VideoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( res => {
    this.getVideos();
    });
  }

  delete(id: number) {
    if (confirm('Are You Sure to Delete this Record')) {
      this.videoService.deleteVideo(id).subscribe (res => {
        this.alertify.warning('The Video Has been Deleted');
        this.getVideos();
        this.refreshTable();
      });
    }
  }

  EditVideo(id, videoName, description, videoUrl, created ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
    dialogConfig.data = {id, videoName, description, videoUrl, created};
    const dialogRef = this.dialog.open(EditVideoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.getVideos();
      this.refreshTable();
    });
  }


}
