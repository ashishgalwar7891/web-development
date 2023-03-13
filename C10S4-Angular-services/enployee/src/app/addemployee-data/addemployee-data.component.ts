import { Component } from '@angular/core';
import { IEmployee } from '../models/employee';
import { EmployeeService1Service } from '../service/employee-service1.service';

@Component({
  selector: 'app-addemployee-data',
  templateUrl: './addemployee-data.component.html',
  styleUrls: ['./addemployee-data.component.css']
})
export class AddemployeeDataComponent {
  emp: IEmployee={
    "id":0,
    "name":" ",
    "age":0
  };
  postdata:IEmployee={"id":0,  "name":" ",  "age":0};

  constructor(private myservice:EmployeeService1Service) {  }

  upload(){
    this.myservice.uploadData(this.emp).subscribe(data=>this.postdata=data);
  }
}
