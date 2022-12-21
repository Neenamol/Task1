import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http: HttpClient) { }


  viewemployee() {
    return this.http.get("http://127.0.0.1/ActionFiles/ViewEmployee.php").toPromise()
  }
  AddEmployee(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/InsertEmployee.php", data).toPromise()
  }
 
  getEmployeeId(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/getEmployeeId.php", data).toPromise()
  }
  UpdateEmployee(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/UpdateEmployee.php", data).toPromise()
  }
  DeleteEmployee(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/DeleteEmployee.php", data).toPromise()
  }

  AddReview(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/InsertReview.php", data).toPromise()
  }
  ViewReview() {
    return this.http.get("http://127.0.0.1/ActionFiles/ViewReview.php").toPromise()
  }
  getReviewId(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/getReviewId.php", data).toPromise()
  }
  UpdateReview(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/UpdateReview.php", data).toPromise()
  }
  DeleteReview(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/DeleteReview.php", data).toPromise()
  }
  Logindata(data: any) {
    return this.http.post("http://127.0.0.1/ActionFiles/login.php", data).toPromise()
  }

}
