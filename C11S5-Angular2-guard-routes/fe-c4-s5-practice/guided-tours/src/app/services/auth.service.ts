import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

    login(tourGuideCode: string) {
        this.isLoggedIn = tourGuideCode === "TG@2022"
        return this.isLoggedIn;
    }
    logout() {
        this.isLoggedIn = false;
    }

  constructor() { }
}
