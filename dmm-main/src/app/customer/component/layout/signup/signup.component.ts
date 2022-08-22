import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  formList = new FormGroup({
    fullName:new FormControl('',
    [Validators.required]),
    phone:new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
      // Validators.email
    ]),
    password:new FormControl('',[
      Validators.required
    ]),
  })

  constructor(private http:HttpClient,private route:Router,private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
   
  }
  signUp(){
    this.http.post<any>(" http://localhost:3000/signupForm",this.formList.value).subscribe((data)=>{
      alert("Đăng Kí Thành Công !");
      this.formList.reset();
      this.route.navigate(['login'])
    })
  }
  get form():any{
    return this.formList.controls;
  }

}
