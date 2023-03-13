import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';
import { NotesRouterService } from '../services/notes-router.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent {
  notes:Note[]=[];

  constructor(private myservice:NoteService){ console.log(this.notes)}
  
  ngOnInit(){
    this.myservice.getNotes().subscribe({next:data=>this.notes=data});
    console.log(this.notes);
  }
}
