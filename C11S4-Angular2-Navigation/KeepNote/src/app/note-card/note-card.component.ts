import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {

  note:Note={ };
  
  // Note:any;
  constructor(private routerService:Router,
    private activatedRoute: ActivatedRoute,
    private keepnoteService:NoteService,
    ){}


  onclick()
  {
    this.routerService.navigate(["home"]);
  }

  ngOnInit(): void 
{
  this.activatedRoute.paramMap.subscribe(data => {
  let id = data.get('id')??0;

      this.keepnoteService.getCard(+id).subscribe(data => {this.note = data; });
  });

}
editnote()
{
  this.keepnoteService.editnote(this.note?.id,this.note).subscribe(data=>{
    this.note=data;
    alert("successfully edited ")
    this.routerService.navigate(["home"]);
  })
}

deletenote()
{
  this.keepnoteService.deletenote(this.note?.id).subscribe(data=>{
    this.note=data;
    alert("successfully deleted ")
    this.routerService.navigate(["home"]);
})
}

}
