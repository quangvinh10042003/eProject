import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export class Product {
    id?: string ;
    brand?: string;
    year?:number;
    category_id?:number;
    description?:string;
    name?: string ;
    price?: number ;
    bodyStyle?:string;
    engine?:string;
    Mileage?:number;
    extColor?:string;
    extImg?:string;
    intColor?:string;
    intImg?:string;
    imgProduct?: string ;
    allImg?:any;
    interior?:string;
    inHome?:boolean;
    inTopSeller?:boolean;
}
