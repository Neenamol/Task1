import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  savestatus=false;
  constructor(private fb: FormBuilder,private dbservice:DbserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
  username: ["",Validators.required],
  password: ["",Validators.required]
  })
  onSubmit() {
    if (!this.loginForm.valid) {
      this.savestatus = true
      return
    }
    this.dbservice.Logindata(this.loginForm.value).then((confirmation: any) => {
      console.log(confirmation);
      alert("Login Success")
        this.router.navigate(['/admin/home'])
      
      

    })
  }
  }
