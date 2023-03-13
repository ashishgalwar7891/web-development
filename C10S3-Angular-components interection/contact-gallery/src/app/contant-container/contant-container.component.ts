import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contant';

@Component({
  selector: 'app-contant-container',
  templateUrl: './contant-container.component.html',
  styleUrls: ['./contant-container.component.css']
})
export class ContantContainerComponent {
@Input()
  contacts: Contact[] = [];



  // displayOut(contacts:any){
  //   this.hovercard.emit(null);
  // }
@Output()
passelement:EventEmitter<Contact>=new EventEmitter<Contact>();

fun2(obj:Contact){
  this.passelement.emit(obj)
}

  
}
