import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contactData:any;
  check:any;
  cart:any;

  constructor(private cartService:CartService,private blogService:BlogService) { }

  ngOnInit(): void {
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    this.cart = this.cartService.items.length;
    this.cartService.totalCart.subscribe((data)=>{
        this.cart = data;
    })
  }
  logout(){
    localStorage.removeItem('loginForm')
    localStorage.removeItem('cart')
    this.blogService.getList()
    window.location.reload();
  }

}
