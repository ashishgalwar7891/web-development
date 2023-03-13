import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search: string='';
  notes: Note[]=[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver,private myservice:NoteService) {}

ngOnInit():void
{
  this.myservice.getNotes().subscribe(data=>this.notes=data);
 
}

onSearchTextChanged()
{
 this.myservice.getNotes().subscribe({
   next: data =>{
     if (this.search || this.search !== '') {
        this.notes = data.filter(data => data.title?.startsWith(this.search));
     }else
        this.notes = data;
     },
   error: e =>{
      alert(e.message);
    }
  });
}
}
