import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
const urlAPI = "./assets/data/color.json"
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http:HttpClient) { }
  getAllColor():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
