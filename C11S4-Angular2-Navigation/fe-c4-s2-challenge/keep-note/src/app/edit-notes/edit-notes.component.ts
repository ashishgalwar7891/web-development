import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';
import { NotesRouterService } from '../services/notes-router.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent {
  notes:Note={};
  constructor(private activatedRoute: ActivatedRoute,private keepnoteService:NoteService){}

  ngOnInit(): void 
{
  this.activatedRoute.paramMap.subscribe(data => {
  let id = data.get('id')??0;
      this.keepnoteService.getCard(+id).subscribe(data => {this.notes = data; });
  });

}
}
