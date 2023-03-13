import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contant';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  @Input()
  contacts: Contact[] = [];

  @Output()
  hovercard:EventEmitter<Contact> = new EventEmitter<Contact>();
  displayCard(contacts:Contact){
    this.hovercard.emit(contacts);
  }
    displayOut(contacts:any){
    this.hovercard.emit();
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
