import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
url="http://localhost:3000/notes"
  constructor(private http:HttpClient) { }

  getNotes():Observable<Array<Note>>
  {
    return this.http.get<Array<Note>>(this.url)
  }
  uploadData(emp26:Note)
  {
    return this.http.post<Note>(this.url,emp26);
  }
}
