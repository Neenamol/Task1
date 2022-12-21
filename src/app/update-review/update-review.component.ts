import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {

  category_id= -1;
  public dataarray: any;
  reviewFormGroup!: FormGroup;
  savestatus=false;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private router:Router,private dbservice: DbserviceService) {
    
    route.params.subscribe(sid=> { this.category_id= sid.id })
    }
    

    ngOnInit(): void {
      this. reviewFormGroup = this.fb.group({
        reviewid: [""],
        empname: ["",Validators.required],
        review: ["",Validators.required]
      })
      this.dbservice.getReviewId({ category_id: this.category_id }).then((data: any) => {
      this.dataarray = data.data[0];
      this. reviewFormGroup.patchValue(this.dataarray)
      });
    }
      onEditSubmit() {
        if (!this.reviewFormGroup.valid) {
          this.savestatus = true
          return
          }
          
        this.dbservice.UpdateReview(this. reviewFormGroup.value).then((confirmation: any)=> {
          console.log(confirmation);
          if (confirmation.alert === "Sucess") {
          alert('Review Updated Sucessfuly')
          this.router.navigate(['/admin/ViewReview'])
          }
          })
   
      }
      onDeleteSubmit() {
        this.dbservice.DeleteReview(this. reviewFormGroup.value).then((confirmation: any)=> {
          console.log(confirmation);
          if (confirmation.alert === "Sucess") {
          alert('Review Deleted')
          this.router.navigate(['/admin/ViewReview'])
          }
          })
   
      }
      
      }