import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService1Service {
  constructor(private http:HttpClient){}

  url="http://localhost:3000/Employee"
  
  ngOnInit():void{ 
    
  }
  getEmployeeData():Observable<Array<IEmployee>>{
  
    return this.http.get<Array<IEmployee>>(this.url);
  }

  uploadData(emp:IEmployee){
    return this.http.post<IEmployee>(this.url,emp);
  }
}
