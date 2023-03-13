import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../Models/Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>("http://localhost:3100/notes");
  }

  postNotes(Notes:Note){
    return this.http.post<Note>("http://localhost:3100/notes",Notes)
  }
}
