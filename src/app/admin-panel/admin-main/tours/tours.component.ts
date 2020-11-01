import { Component, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';
import { TourService } from 'src/app/_services/tour.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import { TourComponent } from './tour/tour.component';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { Tour } from 'src/app/_model/tour';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  public tours: Tour[];
  model: any = {};
  // public tours: any;
  searchKey: string;
  displayedColumns: string[] = ['id', 'tourName', 'description', 'photoUrl', 'tourStatus', 'actions'];
  dataSource = new MatTableDataSource<any>();
  index: number;
  id: number;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private tourService: TourService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.getTours();
  }

  onClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }


  getTours() {
    this.tourService.getTours().subscribe(response => {
      this.tours = response;
      this.dataSource = new MatTableDataSource<any>(this.tours);
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
    const dialogRef = this.dialog.open(TourComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( res => {
    this.getTours();
    });
  }
  delete(id: number) {
    if (confirm('Are You Sure to Delete this Record')) {
      this.tourService.deleteTour(id).subscribe (res => {
        this.alertify.warning('The Tour Has been Deleted');
        this.getTours();
        this.refreshTable();
      });
    }
  }

  private refreshTable() {

    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
