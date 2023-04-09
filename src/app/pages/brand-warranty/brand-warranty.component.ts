import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-warranty',
  templateUrl: './brand-warranty.component.html',
  styleUrls: ['./brand-warranty.component.css']
})
export class BrandWarrantyComponent implements OnInit {
  list:any;
  constructor(private categorySer: CategoryService) { }

  ngOnInit(): void {
    this.categorySer.getAll().subscribe(data=>{
      this.list = data;
    })
  }

}
