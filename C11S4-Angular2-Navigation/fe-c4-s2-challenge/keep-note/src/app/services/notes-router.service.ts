import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotesRouterService {

  constructor(private router:Router) { }

  navigateToHome() {
    this.router.navigate([""]);
}
}
