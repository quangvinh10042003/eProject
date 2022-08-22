import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupForm").subscribe((data)=>{
      const user = data.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      })
      if(user){
        alert("Đăng Nhập Thành Công ! ");
        this.loginForm.reset();
        localStorage.setItem('loginForm',JSON.stringify(user)),
        this.route.navigate(['/']);
      }else{
        alert('Đăng Nhập Thất Bại ! Vui Lòng Kiểm Tra Lại')
      }
    })
   
  }

}
