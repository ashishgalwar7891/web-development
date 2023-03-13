import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tourGuideCode: string = "";

  constructor(private authService: AuthService,
    private routeService: RouteService ) { }

    validateTourGuideCode() {
      if(this.authService.login(this.tourGuideCode))
      {
      this.routeService.navigateToTourRequestsView();
      }      
  }

  ngOnInit(): void {
  }

}
