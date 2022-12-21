import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './admin/home/home.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ViewReviewComponent } from './view-review/view-review.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { GuesthomeComponent } from './guesthome/guesthome.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddReviewComponent,
    ViewReviewComponent,
    UpdateEmployeeComponent,
    UpdateReviewComponent,
    GuesthomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
