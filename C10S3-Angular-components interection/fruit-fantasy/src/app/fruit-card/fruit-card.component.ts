import { Component, Input } from '@angular/core';
import { Fruit } from 'src/modals/fruit';
@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent {
@Input()
  fruitcard?:Fruit;
}
