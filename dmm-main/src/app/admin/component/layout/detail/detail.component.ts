import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Model/blog';
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


  constructor(private blogService:BlogService,private actRouter:ActivatedRoute) { }

  ngOnInit(): void { 
    let _id = this.actRouter.snapshot.params['id'];
    this.blogService.find(_id).subscribe((data)=>{
      this.sliderImg = data.allImg;
      this.listProduct = data
    })
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


}
