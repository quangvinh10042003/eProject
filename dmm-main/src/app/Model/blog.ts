import { Injectable } from '@angular/core';
// import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class Blog {
    // id?:number;
    // name?:string;
    // avatar?:string;
    // price?:string;
    // introduce?:string;
    // category_id?:number;
    // role?:Role;
    id?:number;
    name?:string;
    category_id?:number;
    price?:number;
    avatar?:string;
    size?:string;
    weight?:number;
    volume?:number;
    cylinder?:string;
    gear?:string;
    wattage?:string;
    maxspeed?:number;
    capacity?:number;
    allImg?:any;
    save?:any;
    productImg?:any;
    endImg?:any;
    quantity?:any;
}
