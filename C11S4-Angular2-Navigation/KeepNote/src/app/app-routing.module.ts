import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCardComponent } from './note-card/note-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const routes: Routes = [
  {
    path:'home',
    component:ViewNoteComponent
  },
  {
    path:"note",
    component:NoteCardComponent
  },
  {
    path:'view-note/:id',
    component:NoteCardComponent
  },
  {
    path: " ", redirectTo: " ", pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
