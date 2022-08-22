import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listCate:any;
  listEvent:any;

  constructor(private categoryService:CategoryService,private route:Router,public sanitizer: DomSanitizer,private eventService:EventService) { }
  keyword:any;
  ngOnInit(): void {
    this.categoryService.getAllCat().subscribe((data)=>{
      this.listCate = data;
    })
    this.eventService.getAll().subscribe((data)=>{
      this.listEvent = data;
    })
  }
  navigator(id:number){
    this.route.navigate([`/product/${id}`])
  }

}
