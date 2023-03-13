import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fruit-fantasy';
  url = '../../assets/images/apple.jpg';
  fruitnameandcolor = [
    {
      name: 'Apple',
      color: '#FF0000'
    },
    {
      name: 'Grape',
      color: '#00FF00'
    },
    {
      name: 'Pear',
      color: '#0000FF'
    },
    {
      name: 'Banana',
      color: '#FF00FF'
    },
    {
      name: 'Lemon',
      color: '#FFA500'
    },
    {
      name: 'Orange',
      color: '#FF4500'
    },
    {
      name: 'Strawberry',
      color: '#FF0000'
    }
  ]

}
