import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from './models/contant';
import { CONTACTS } from './models/contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {

  contact=CONTACTS;

  passelement(obj:Contact){
    this.contactpasseds=obj
    // setInterval(()=>this.contactpasseds={},5000)
  }
  contactpasseds?:Contact;


  search(contact:string){
    if(contact ==""){
      this.contact = CONTACTS;
    }
    else{
      this.contact = CONTACTS;
      this.contact= this.contact.filter(p=>p.firstName?.toLowerCase().startsWith(contact.toLowerCase()));
      }
    }


}
