import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlAPI = "./assets/data/bodyStyle.json"
@Injectable({
  providedIn: 'root'
})
export class BodyStyleService {

  constructor(private http:HttpClient) { }

  getAllBody():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
