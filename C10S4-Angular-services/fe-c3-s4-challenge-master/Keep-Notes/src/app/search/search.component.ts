import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  seachtextemit:EventEmitter<string>=new EventEmitter<string>()

  searchText:string=""
  search(){
    this.seachtextemit.emit(this.searchText)
  }
}
