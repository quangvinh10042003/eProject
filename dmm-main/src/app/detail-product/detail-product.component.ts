import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NhapService } from '../nhap/nhap.service';
import { BlogService } from '../Service/blog.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../Service/category.service';
import { EventService } from '../Service/event.service';
import { CartService } from '../Service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  listProduct:any;
  sliderImg:any = [];
  listCate:any;
  listEvent:any;
  contactData:any;
  check:any;
  cart:any;


  constructor(private blogService:BlogService,private actRoute:ActivatedRoute,private nhap:NhapService,private el:ElementRef,private categoryService:CategoryService,private route:Router,private eventService:EventService,private cartService:CartService) { }

  ngOnInit(): void {
    let _id = this.actRoute.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      this.sliderImg = data.allImg;
      this.listProduct = data
    })
    this.categoryService.getAllCat().subscribe((data)=>{
      this.listCate = data;
    })
    this.eventService.getAll().subscribe((data)=>{
      this.listEvent = data;
    })
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    this.cart = this.cartService.items.length;
    this.cartService.totalCart.subscribe((data)=>{
        this.cart = data;
    })
    // console.log(this.check)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  navigator(id:number){
    this.route.navigate([`/product/${id}`])
  }
  addToCart(product:any){
    let x = localStorage.getItem('loginForm')
    if(x){
      this.cartService.add(product)
      this.route.navigate(['/carts'])
    }else{
      Swal.fire('Bạn cần phải đăng nhập tài khoản trước')
    }
  }
  logout(){
    localStorage.removeItem('loginForm')
    localStorage.removeItem('cart')
  }
  reload():void{
    window.location.reload();
  }
 

}
  
