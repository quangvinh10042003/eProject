import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
const urlAPI = "./assets/data/warranty.json"
@Injectable({
  providedIn: 'root'
})
export class WarrantyService {

  constructor(private http: HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any[]>(urlAPI);
  }
}
