import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Model/blog';

const API = 'http://localhost:3000/category_id'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCat():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${API}`)
  }
}
