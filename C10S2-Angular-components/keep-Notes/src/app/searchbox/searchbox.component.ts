import { Component } from '@angular/core';
import { NOTES } from 'src/models/Notes';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
  notes= NOTES;
  searchtext :string='';
  searchNote(){
    if(this.notes==null){
      this.notes=NOTES;
    }else{
      this.notes=NOTES;
      this.notes=this.notes.filter(not=>not.title?.startsWith(this.searchtext.toLocaleLowerCase()));
    }
  }
}
