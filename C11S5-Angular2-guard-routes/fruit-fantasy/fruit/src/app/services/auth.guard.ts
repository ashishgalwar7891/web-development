import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RouteService } from './route.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as:AuthService,private rs:RouteService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      
      if(this.as.isloggedin)
      {
        alert("inside Can Activate")
        return true;
      }
      
      else{
        this.rs.toLogin();
        alert("inside Can Activate")
        alert(this.as.isloggedin)
        return false;
      }
 
  }
  
}
