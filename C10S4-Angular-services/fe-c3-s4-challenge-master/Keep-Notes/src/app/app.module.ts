import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { SearchComponent } from './search/search.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from './services/note.service';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DasboardComponent,
    NotesViewComponent,
    AddNotesComponent,
    SearchComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
