import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { RouteService } from '../services/route.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input()
  isloggedin:boolean=false;
  constructor(private as:AuthService,private rs:RouteService) { }

  ngOnInit(): void {
  }
logout()
{
  this.as.logout();
this.isloggedin=this.as.isloggedin;
alert(this.isloggedin)
this.rs.toLogin();


}
}
