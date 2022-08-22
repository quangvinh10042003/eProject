import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Model/blog';
const urlAPI = '   http://localhost:3000/detailEvent'

@Injectable({
  providedIn: 'root'
})
export class NhapService {

  constructor(private http:HttpClient) { }

  find(id:number):Observable<Blog[]>{
    return this.http.get<Blog[]>(`${urlAPI}/${id}`)
  }
}
