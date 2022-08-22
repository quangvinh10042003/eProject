import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BlogService } from '../Service/blog.service';
import { CartService } from '../Service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {


  listCart:any = [];
  contactData:any;
  check:any;
  deleteCart:any;
  cart:any; 
  quantity:any;
  totalPrice:number = 0;


  constructor(private cartService:CartService,private act:ActivatedRoute,private blogService:BlogService) { }

  ngOnInit(): void {
    this.listCart = this.cartService.items;
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    this.cart = this.cartService.items.length;
    this.cartService.totalCart.subscribe((data)=>{
        this.cart = data;
    })
    this.doTotalPrice();
    
  }
  deleteIt(id:any):void{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.deleteCart = this.cartService.deleteIt(id)
        // this.cartService.getList();
      }
    })
  
  }

  logout(){
    localStorage.removeItem('loginForm')
    localStorage.removeItem('cart')
  }
  doTotalPrice(){
    let total = 0;
    this.cartService.items.forEach((item: {price :number ,quantity:number})=>{
      // item.quantity  = 1;
      total+= item.price * item.quantity;
    });
    this.totalPrice = total;
  }
 
  register():void{
    Swal.fire('Đặt hàng thành công !!!')
  }
 
 

}
