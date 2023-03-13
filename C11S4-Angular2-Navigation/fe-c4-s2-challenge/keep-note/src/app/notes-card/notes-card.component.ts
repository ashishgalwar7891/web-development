import { Component, Input } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.css']
})
export class NotesCardComponent {
@Input()
notes:Note={};
clr:string="primary";
toggle(){
  this.clr="access";
}
}
