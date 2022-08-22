import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlAPI = 'http://localhost:3000/product';


@Injectable({
  providedIn: 'root'
})
export class DetailProductService {

  constructor(private http:HttpClient) { }
}
