import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {
  listCategory:any;

 
  constructor(private categoryService:CategoryService,private route:Router) { }

  ngOnInit(): void {  
    this.categoryService.getAllCat().subscribe((data)=>{
      this.listCategory = data;
    })

  }
  navigator(id:number){
    this.route.navigate([`admin/product/${id}`])
  }

}
