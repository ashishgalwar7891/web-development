import { Component } from '@angular/core';
import { FRUIT } from 'src/modals/fruitlist';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    fruit1=FRUIT;
    searchtext: string='';
    search(){
      if(this.searchtext==''){
      this.fruit1=FRUIT;
      }else{
        this.fruit1=FRUIT;
        this.fruit1=this.fruit1.filter(fruit=>fruit.name1?.startsWith(this.searchtext.toLocaleLowerCase()));
      }
    }
    reset(){
      this.searchtext='';
      this.fruit1=FRUIT;
    }
}
