import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlAPI = "./assets/data/intColor.json"
@Injectable({
  providedIn: 'root'
})
export class IntColorService {

  constructor(private http:HttpClient) { }

  getAllInt():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
