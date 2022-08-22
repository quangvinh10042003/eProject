import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formIn4 = new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
    category_id:new FormControl('',[
      Validators.required,
      Validators.pattern('[1-12]{1}')
    ]),
    price:new FormControl('',[
      Validators.required,
    ]),
    avatar:new FormControl('',[
      Validators.required,
    ]),
    size:new FormControl('',[
      Validators.required
    ]),
    weight:new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
    volume:new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
    cyliner:new FormControl('',[
      Validators.required
    ]),
    gear:new FormControl('',[
      Validators.required
    ]),
    maxspeed:new FormControl('',[
      Validators.required,
      Validators.min(100)
    ]),
    wattage:new FormControl('',[
      Validators.required
    ]),
    capacity:new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
    // allImg:new FormControl('')
  })

  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    this.blogService.addProduct(this.formIn4.value).subscribe((data:any)=>{
      if(data){
        this.router.navigate(['/'])
      }
    })
  }
  get form():any{
    return this.formIn4.controls;
  }

}
