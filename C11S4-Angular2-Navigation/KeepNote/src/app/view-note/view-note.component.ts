import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent {
  Note:any;

  constructor(private myservice:NoteService ){
  }
  search:string="";
  

  ngOnInit():void
  {
    this.myservice.getNotes().subscribe(data=>this.Note=data);
   
  }
  onSearchTextChanged()
  {
   this.myservice.getNotes().subscribe({
     next: (data: any[]) => 
     {

       if (this.search || this.search !== '') 
       {
       this.Note = data.filter(notee => notee.title?.startsWith(this.search));
       }
       else
       this.Note = data;
     },
     error: (e: any) =>
     {
     alert(e.message);
     }
   })

}

 


}
