import { Component } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note:Note={
    "title":"",
    "content":""
  }
  postdata:Note={
    "title":"",
    "content":"",
  };
  b:any;
 show:boolean
  constructor(private myservice:NoteService) { 
  this.show=false;
   }
  
  saveBlog()
  { window.location.reload();
    this.myservice.uploadData(this.note).subscribe(data=>this.postdata=data);
  }
  
}
