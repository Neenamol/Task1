import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {



  constructor(private dbservice: DbserviceService,private router:Router) { }

  public dataarray: any[] = [];
  ngOnInit(): void {
    this.dbservice.ViewReview().then((data: any) => {
      this.dataarray = data;
      //console.log(this.dataarray.values)
    });
  }

  addNew(){
    this.router.navigate(['/admin/AddReview'])
  }
}