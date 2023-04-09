import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
const urlAPIVehical = "./assets/data/product.json"
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
}
