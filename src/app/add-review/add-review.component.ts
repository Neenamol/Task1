import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {


    savestatus=false;
    constructor(private fb: FormBuilder, private dbservice: DbserviceService,private router:Router) { }
  
    reviewFormGroup = this.fb.group({
      reviewid: [""],
      empname: ["",Validators.required],
      review: ["",Validators.required]
    })
  
  
    get fcontrols() {
      return this.reviewFormGroup.controls;
    }
    ngOnInit(): void {
    }
    onSubmit() {
      if (!this.reviewFormGroup.valid) {
        this.savestatus = true
        return
        }
        
      this.dbservice.AddReview(this.reviewFormGroup.value).then((confirmation:any) =>{console.log(confirmation);
      if(confirmation.alert==="Success"){
      alert('Review Added Successfully ')
      this.router.navigate(['admin/ViewReview'])
      }})
     
    }
  
  }