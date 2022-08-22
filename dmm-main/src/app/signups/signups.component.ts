import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {
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
  contactData:any;
  check:any;

  constructor(private http:HttpClient,private route:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    // console.log(this.check)
  }
  signUp(){
    this.http.post<any>(" http://localhost:3000/signupForm",this.formList.value).subscribe((data)=>{
      this.formList.reset();
      this.route.navigate(['login'])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng ký tài khoản thành công',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  get form():any{
    return this.formList.controls;
  }

}
