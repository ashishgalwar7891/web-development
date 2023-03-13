import { Component, Input } from '@angular/core';
import { Contact } from '../models/contant';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent {
  @Input()
  contactpasseds?:Contact;

}
