import { Component } from '@angular/core';
import { Note } from './models/Note';
import { NOTES } from './models/Notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-note';
}
