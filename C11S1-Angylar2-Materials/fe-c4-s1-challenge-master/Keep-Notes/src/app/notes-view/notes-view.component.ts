import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';
import { Note } from '../Models/Notes';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent {
  @Input()
  notes:Note[] = [];

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

}

