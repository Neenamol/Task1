import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  category_id= -1;
  public dataarray: any;
  employeeFormGroup!: FormGroup;
  savestatus=false;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private router:Router,private dbservice: DbserviceService) {
    
    route.params.subscribe(sid=> { this.category_id= sid.id })
    }
    

    ngOnInit(): void {
      this. employeeFormGroup = this.fb.group({
        empid: [""],
        empname: ["",Validators.required],
        designation: ["",Validators.required],
        place:["",Validators.required],
        contactnumber: [""]
      })
      this.dbservice.getEmployeeId({ category_id: this.category_id }).then((data: any) => {
      this.dataarray = data.data[0];
      this. employeeFormGroup.patchValue(this.dataarray)
      });
    }
      onEditSubmit() {
        if (!this.employeeFormGroup.valid) {
          this.savestatus = true
          return
          }
          
        this.dbservice.UpdateEmployee(this. employeeFormGroup.value).then((confirmation: any)=> {
          console.log(confirmation);
          if (confirmation.alert === "Sucess") {
          alert('Employee Updated Sucessfuly')
          this.router.navigate(['/admin/ViewEmployee'])
          }
          })
   
      }
      onDeleteSubmit() {
        this.dbservice.DeleteEmployee(this. employeeFormGroup.value).then((confirmation: any)=> {
          console.log(confirmation);
          if (confirmation.alert === "Sucess") {
          alert('Employee Deleted')
          this.router.navigate(['/admin/ViewEmployee'])
          }
          })
   
      }
      
      }