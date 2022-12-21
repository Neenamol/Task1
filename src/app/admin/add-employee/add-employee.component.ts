import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  savestatus=false;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService,private router:Router) { }

  employeeFormGroup = this.fb.group({
    empid: ["",Validators.required],
    empname: ["",Validators.required],
    designation: ["",Validators.required],
    place:["",Validators.required],
    contactnumber: ["",[Validators.required,Validators.pattern("[0-9]{10}")]],
    
  })


  get fcontrols() {
    return this.employeeFormGroup.controls;
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.employeeFormGroup.valid) {
      this.savestatus = true
      return
      }
      
    this.dbservice.AddEmployee(this.employeeFormGroup.value).then((confirmation:any) =>{console.log(confirmation);
    if(confirmation.alert==="Success"){
    alert('Employee Added Successfully ')
    this.router.navigate(['admin/ViewEmployee'])
    }})
    //console.log(this.employeeFormGroup.value);
  }

}