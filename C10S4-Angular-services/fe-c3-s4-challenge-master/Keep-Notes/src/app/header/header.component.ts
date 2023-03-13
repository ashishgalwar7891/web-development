import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../Models/Notes';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output()
findtextemit:EventEmitter<string>=new EventEmitter<string>()

  seachtextemit(str:string){
     this.findtextemit.emit(str);
  }

}
