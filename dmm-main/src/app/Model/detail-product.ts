import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailProduct {
    id?:number;
    name?:string;
    category_id?:number;
    price?:string;
    avatar?:string;
    size?:string;
    weight?:number;
    volume?:number;
    cylinder?:string;
    gear?:string;
    wattage?:string;
    maxspeed?:number;
    capacity?:number;
    allImg?:any
}
