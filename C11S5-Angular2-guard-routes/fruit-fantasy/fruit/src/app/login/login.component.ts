import { Component, OnInit,Output } from '@angular/core';

import { AuthService } from '../services/auth.service'
import { RouteService } from '../services/route.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

idcode:string="";
// @Output()
// loggedin:EventEmitter


  constructor(private as:AuthService,private rs:RouteService) { }

  ngOnInit(): void {
  }
validate()
{
  if(this.idcode==="NIIT2022")
  {
  this.as.login()

  this.rs.toHome()
  }
}
}
