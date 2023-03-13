import { Component } from '@angular/core';
import { MOVIES } from './movies';


@Component({
  selector: 'app-displaymovie',
  templateUrl: './displaymovie.component.html',
  styleUrls: ['./displaymovie.component.css']
})
export class DisplaymovieComponent {
  movies=MOVIES;
}
