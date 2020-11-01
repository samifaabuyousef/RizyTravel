import { Component, OnInit, ViewChild } from '@angular/core';
import { TourRequest } from 'src/app/_model/TourRequest';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TourRequestService } from 'src/app/_services/tour-request.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-tour-requests',
  templateUrl: './tour-requests.component.html',
  styleUrls: ['./tour-requests.component.css']
})
export class TourRequestsComponent implements OnInit {
  model: any = {};
  tourRequest: TourRequest;
  tourRequestToUpdate: TourRequest;
  public requests: TourRequest[];
  searchKey: string;
  displayedColumns: string[] = [ 'id', 'name', 'passportNumber' , 'phone' , 'tourName', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>();
  index: number;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private tourRequestService: TourRequestService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.getRequests();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  onClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  getRequests() {
    this.tourRequestService.getTourRequests().subscribe(response => {
      this.requests = response;
      this.dataSource = new MatTableDataSource<any>(this.requests);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.refreshTable();
    }, error => {
      console.log('error in loading');
    });
  }

  delete(id) {
    if (confirm('Are You Sure to Delete this Record')) {
      this.tourRequestService.deleteRequest(id).subscribe (res => {
        this.alertify.warning('The Request Has been Deleted');
        this.getRequests();
        this.refreshTable();
      });
    }
  }

}
