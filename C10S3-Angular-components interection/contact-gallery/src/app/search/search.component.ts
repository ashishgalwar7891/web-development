import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  outputsearchtext:EventEmitter<string>=new EventEmitter<string>()
  
    searchtext:string=''
  
  fun(){ 
    this.outputsearchtext.emit(this.searchtext)
  }
  
}
