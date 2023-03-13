import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
url="http://localhost:3000/notes"
  notes: any;

  constructor(private http:HttpClient) { }

  getNotes():Observable<Array<Note>>
  {
    return this.http.get<Array<Note>>(this.url)
  }

  getCard(cardId: number): Observable<Note> {
    return this.http.get<Note>(`${this.url}/${cardId}`);
  }

  postNotes(notesId:Note)
  {
    return this.http.post<Note>(this.url,notesId);
  }

  deleteNotes(notesId: number): Observable<Note> {    
    return this.http.delete<Note>(`${this.url},${notesId}`);
  }

  editNote(notesId?: number, notes?: Note) {
    return this.http.put<Note>(`${this.url}/${notesId}`,notes);
  }

}
