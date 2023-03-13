import { Component } from '@angular/core';
import { Note } from '../models/Note';
import { NOTES } from '../models/Notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {
  notes=NOTES;
  noteslist=NOTES
  searchText:string=""
  searchtextemit(str:string){
    if(str===''){
      this.notes=NOTES
    }
    else{
      this.notes=NOTES
      this.notes=this.notes.filter(i=>i.title?.toLowerCase().startsWith(str))
      
    }
  }
  
  passnote(obj:Note){
    console.log(obj)
    console.log(this.noteslist)
    this.noteslist.push(obj)

  }

}
