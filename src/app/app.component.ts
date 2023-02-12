import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from './Model/Hotel';
import { MasterService } from './service/master.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  displayedColumns: string[] = ['name', 'stars'];
  dataSource :any;
  hoteldata:any;

  @ViewChild(MatPaginator) paginator !:MatPaginator;
  

  constructor(private service:MasterService){
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.service.GetHotel().subscribe(result=>{
      this.hoteldata=result;

      this.dataSource=new MatTableDataSource<Hotel>(this.hoteldata)
      this.dataSource.paginator=this.paginator;
  
    })
  }
  Filterchange(event:Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filvalue;
  }
}
