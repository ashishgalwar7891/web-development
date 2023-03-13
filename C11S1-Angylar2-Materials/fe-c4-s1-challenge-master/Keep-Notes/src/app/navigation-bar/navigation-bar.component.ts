import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Note } from '../Models/Notes';
import { outputAst } from '@angular/compiler';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  @Input()
  notes:Note[] = [];

  @Output()
  findtextemit: EventEmitter<string>=new EventEmitter();
  seachtextemit(str:string){
    this.findtextemit.emit(str);

  }



}
