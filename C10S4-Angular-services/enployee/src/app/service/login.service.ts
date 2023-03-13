import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  getEmployeeData(){
    return [
      {"username":"admin","passward":"admin"},
  ];
  }
}
