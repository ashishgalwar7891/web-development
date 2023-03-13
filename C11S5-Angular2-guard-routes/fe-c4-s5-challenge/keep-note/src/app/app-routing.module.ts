import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteComponent } from './note/note.component';
import { SelectNoteViewComponent } from './select-note-view/select-note-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: "login", component: LoginComponent },
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: "home/:id", component: SelectNoteViewComponent ,canActivate: [AuthGuard], canDeactivate:[CanDeactivateGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
