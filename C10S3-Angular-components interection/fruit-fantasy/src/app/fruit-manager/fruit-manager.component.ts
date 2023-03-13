import { Component } from '@angular/core';
import { Fruit } from 'src/modals/fruit';
import { FRUIT } from 'src/modals/fruitlist';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent {
fruitmanager:Fruit[]=FRUIT;

ngOnInit(){
  console.log("inside ");
  console.log(this.fruitmanager);
}

onsearchtext(fruitname:string)
{
  if(fruitname=="")
  {
    this.fruitmanager=FRUIT;
  }else{
    this.fruitmanager=this.fruitmanager.filter(x=>x.name1?.startsWith(fruitname));
  }
}
}
