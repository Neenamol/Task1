import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  constructor(private dbservice: DbserviceService,private router:Router) { }

  public dataarray: any[] = [];
  ngOnInit(): void {
    this.dbservice.viewemployee().then((data: any) => {
      this.dataarray = data;
      //console.log(this.dataarray.values)
    });
  }

  addNew(){
    this.router.navigate(['/admin/AddEmployee'])
  }
}

