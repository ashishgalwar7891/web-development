import { Component, Input } from '@angular/core';
import { Fruit } from 'src/modals/fruit';
@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent {
  @Input()
    fruitlist: Fruit[] = [];
}
