import { Component } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  userd:User={
    name: '',
    email: '',
    stream: '',
    gender: '',
    suscribe: false
}
userLogin(val:any){
  console.log(val)
  console.log(val.name)
  console.log(val.password)
  console.log(val.value)
  console.log(val.password)

}

}
