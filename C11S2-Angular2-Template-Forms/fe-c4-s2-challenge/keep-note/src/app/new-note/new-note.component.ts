import { Component } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']

})
export class NewNoteComponent {
  panelOpenState = false;
  note:Note={
   
  }

  b:any;
 show:boolean
  constructor(private myservice:NoteService,private _snackBar: MatSnackBar) { 
  this.show=false;
   }
  
  onSubmit()
  { window.location.reload();
    this.myservice.uploadData(this.note).subscribe();
    console.log(this.note)
    this._snackBar.open('Feedback submitted successfully', 'success', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn']​
      })
  }
}
