import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';
import { Note } from '../Models/Notes';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent {
  @Input()
  notes: Note[]=[];
  
}

