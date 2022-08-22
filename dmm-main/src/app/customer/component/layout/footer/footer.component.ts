import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  listCate:any;
  listEvent:any;

  constructor(private categoryService:CategoryService,private route:Router,public sanitizer: DomSanitizer,private eventService:EventService) { }

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


