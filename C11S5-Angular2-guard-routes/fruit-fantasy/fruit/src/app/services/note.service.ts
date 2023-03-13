import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../model/note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url="http://localhost:3000/notes"
  note:Note={};
  constructor(private http:HttpClient) { }

  
  getNotes():Observable<Array<Note>>
  {
    return this.http.get<Array<Note>>(this.url)
  }
  uploadData(emp26:Note)
  {
    return this.http.post<Note>(this.url,emp26);
  }
  getCard(id?: number): Observable<Note> 
  {
    return this.http.get<Note>(`${this.url}/${id}`);
  }

  editnote(id?: number,note?:Note): Observable<Note> 
  {
    return this.http.put<Note>(`${this.url}/${id}`,note);
   
  }

  deletenote(id?: number)
  {
    return this.http.delete<Note>(`${this.url}/${id}`);
  }
}
