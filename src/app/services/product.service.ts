import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
const urlAPIVehical = "http://localhost:3000/product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(urlAPIVehical);
  }
  getItem(id:number):Observable<Product>{
    return this.http.get<Product>(`${urlAPIVehical}/${id}`);
  }
  editItem(id:number, data:Product){
    return this.http.put(`${urlAPIVehical}/${id}`,data);
  }
  deleteItem(id:number){
    return this.http.delete(`${urlAPIVehical}/${id}`);
  }
  addItem(data:Product){
    return this.http.post(`${urlAPIVehical}`,data)
  }
}
