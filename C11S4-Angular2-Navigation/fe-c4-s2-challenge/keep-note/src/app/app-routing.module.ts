import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const routes: Routes = [
  {
    path:'view-notes',
    component:ViewNoteComponent
  },
  {
    path:'',
    redirectTo:'/view-notes',
    pathMatch:'full'
  },
  {
    path:'edit-notes',
    component:EditNotesComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
