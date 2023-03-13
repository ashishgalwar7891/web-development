import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../Models/Notes';
import { NoteService } from '../services/note.service';

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

constructor(private mynotes:NoteService){}

addnote(title:string,content:string)
{
  this.notes.title=title
  this.notes.content=content
  this.mynotes.postNotes(this.notes).subscribe({next:data=>alert("Notes Added"),error:e=>alert(`${e.message}\n${e.status}`)})
  this.notes
  window.location.reload()

}
}
