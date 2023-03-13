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
}