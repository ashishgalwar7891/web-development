import { Component, Input } from '@angular/core';
import { Note } from '../models/Note';
import { NOTES } from '../models/Notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input()
  notes:Note[]=[];
}
