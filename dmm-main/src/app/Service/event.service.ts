import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Model/blog';
const url = ' http://localhost:3000/detailEvent'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${url}`);
  }

}
