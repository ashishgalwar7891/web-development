import { Component } from '@angular/core'; 
import { AuthService } from '../services/auth.service'
import { RouteService } from '../services/route.service'


@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.css']
})
export class NavigationPanelComponent {

 isloggedin:boolean=false;
  constructor(private as:AuthService,private rs:RouteService ) {}

isLogged(){
  alert("Inside router outlet")
  this.isloggedin=this.as.isloggedin;
  console.log(this.isloggedin)
  return  this.isloggedin;
}
onlog()
{

}

}
