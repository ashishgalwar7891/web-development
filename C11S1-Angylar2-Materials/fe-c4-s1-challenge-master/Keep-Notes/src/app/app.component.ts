import { Component } from '@angular/core';
import { Note } from './Models/Notes';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes:Note[] = [];
  noteslist:Note[] = [];
  constructor(private noteService: NoteService){}

ngOnInit():void {
  this.noteService.getNotes().subscribe({next:data=>this.notes=data})
  this.noteService.getNotes().subscribe({next:data=>this.noteslist=data})
}

findtextemit(recive:any)
{
    if(recive=="")
    {
      this.notes=this.noteslist
    }
    else
    {
      this.notes=this.noteslist
      this.notes=this.notes.filter(i=>i.title?.toLowerCase().startsWith(recive.toLowerCase()))
    }
}

}


