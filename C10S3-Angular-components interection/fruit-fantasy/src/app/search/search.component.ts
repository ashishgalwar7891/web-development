import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  fruitname:string="";

@Output()
searchtext: EventEmitter<string>=new EventEmitter<string>();

searchfruit(){
  this.searchtext.emit(this.fruitname);
}

reset(){
  this.fruitname=="";
  this.searchtext.emit(this.fruitname);
}

}




