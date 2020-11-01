import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { TourService } from 'src/app/_services/tour.service';
import { PassengerComponent } from './passenger/passenger.component';
import { Passenger } from 'src/app/_model/Passenger';
import { PassengerService } from 'src/app/_services/passenger.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {
  model: any = {};
  passenger: Passenger;
  passengerToUpdate: Passenger;
  public passengers: Passenger[];
  displayedColumns: string[] = ['id', 'name', 'passportNumber', 'nationalIdNumber', 'actions'];
  searchKey: string;
  dataSource = new MatTableDataSource<any>();
  index: number;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private passengerService: PassengerService,
              private alertify: AlertifyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getPassengers();
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

  getPassengers() {
    this.passengerService.getPassengers().subscribe(response => {
      this.passengers = response;
      this.dataSource = new MatTableDataSource<any>(this.passengers);
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
    const dialogRef = this.dialog.open(PassengerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( res => {

    });
  }

  onDelete(id: number) {
    if (confirm('Are You Sure to Delete this Record')) {
      this.passengerService.deletePassenger(id).subscribe (res => {
        this.alertify.warning('The Passenger Has been Deleted');
        this.getPassengers();
        this.refreshTable();
      });
    }
  }

}
