import { Component, Input } from '@angular/core';
import { Note } from '../Models/Notes';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent  
{
  @Input()
  notes: Note[] = [];

  ngOnInit(): void {
    
  }
}