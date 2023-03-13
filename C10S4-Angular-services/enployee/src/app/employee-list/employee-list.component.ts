import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employee:any;
  constructor (private myservice:LoginService){}

  ngonIt(){
    this.myservice.getEmployeeData().subscribe((data: any)=>this.employee=data);
  }
  
}
