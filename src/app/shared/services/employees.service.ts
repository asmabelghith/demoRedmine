import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

   baseUrl="http://localhost:8080/employees"

 addEmployee(data:any):Observable<any>{
  return this.http.post(`${this.baseUrl}`,data)
 }

 constructor(private http: HttpClient) { }

  
}
