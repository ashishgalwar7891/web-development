import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../models/Note';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent {
  @Output()
passnote: EventEmitter<Note>=new EventEmitter<Note>()

notes:Note={
  id: 0,
  title: '',
  content: ''
} 

addnote(title:string,content:string){

  this.notes.title=title
  this.notes.content=content
  this.passnote.emit(this.notes)
  this.notes
}

  
}
