import { Component, Input } from '@angular/core';
import { Contact } from '../models/contant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
@Input()
contactpasseds?:Contact;
}
