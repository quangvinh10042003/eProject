import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlAPI = "./assets/data/yearProduct.json"
@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(private http:HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(`${urlAPI}`)
  }
}
