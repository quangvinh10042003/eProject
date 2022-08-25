import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export class Product {
    id?: string ;
    category_id?:number;
    description?:string;
    name?: string ;
    price?: number ;
    imgProduct?: string ;
    allImg?:any;
    topSpeed?: string ;
    range?:number;
    mph?:number;
    wheel?:string ;
    linkWheel?:string;
    imgWheel?:string;
    paint?:any; 
    interior?:string;
    autoPilot?:string;
    videoAutoPilot?:string;
    inHome?:boolean;
    inTopSeller?:boolean;
}
