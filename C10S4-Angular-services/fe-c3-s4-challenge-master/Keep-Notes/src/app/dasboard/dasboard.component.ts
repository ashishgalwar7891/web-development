import { Component, Input } from '@angular/core';
import { Note } from '../Models/Notes';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  @Input()
  notes:Note[] = [];
}
