import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { HomeComponent } from './admin/home/home.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';
import { GuesthomeComponent } from './guesthome/guesthome.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { ViewReviewComponent } from './view-review/view-review.component';


const routes: Routes = [{path:'admin/home',component:HomeComponent},

                      
                      {path:'admin/ViewEmployee', component:ViewEmployeeComponent},
                      {path:'admin/AddEmployee',component:AddEmployeeComponent},
                      {path:'admin/ViewReview', component:ViewReviewComponent},
                      {path:'admin/AddReview',component:AddReviewComponent},
                      {path:'admin/UpdateEmployee/:id',component:UpdateEmployeeComponent},
                      {path:'admin/UpdateReview/:id',component:UpdateReviewComponent},
                      {path:'guesthome',component:GuesthomeComponent},
                      {path:'login',component:LoginComponent}

                    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
