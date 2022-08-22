import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listProduct:any;
  keyword:any;

  constructor(private blogService:BlogService,private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
     let id:any;
     this.actRouter.paramMap.subscribe(params => {
       id = params.get('id');
       if (id == 1 || id ==2 || id==3||id==4||id==5||id==6||id==7||id==8||id==9||id==10||id==11||id==12) {
         this.blogService.getFilterList(id).subscribe((data) => {
           this.listProduct = data;
         });
       } else {
         this.blogService.getAll().subscribe((data) => {
           this.listProduct = data;
         });
       }
     });
   }
   getList(){
    this.blogService.getAll().subscribe((data) => {
      this.listProduct = data;
    })
  }

}
