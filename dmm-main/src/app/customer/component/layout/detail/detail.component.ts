import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NhapService } from 'src/app/nhap/nhap.service';
import { BlogService } from 'src/app/Service/blog.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  listProduct:any;
  sliderImg:any = [];


  constructor(private blogService:BlogService,private actRoute:ActivatedRoute,private nhap:NhapService,private el:ElementRef) { }
  currentRate:number = 3;
  ngOnInit(): void { 
    let _id = this.actRoute.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      this.sliderImg = data.allImg;
      this.listProduct = data
    })
  }
  @HostListener('click')
  imageChange(){
    var src:any  = this.el.nativeElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = src;
    this.el.nativeElement.parentElement.clasList.add("active")
    // console.log(prev)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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
  cartAdd():void{
    
  }

}
