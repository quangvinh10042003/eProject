import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { stringify } from 'querystring';
import { AccountService } from '../Service/account.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  err:any;

  checkAdmin:any;
  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private http:HttpClient,private route:Router,private acc:AccountService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.checkLoginAdmin(this.loginForm.value)
    // console.log(this.loginForm.value);
    // this.acc.getAll().subscribe((data)=>{
    //   console.log(data)
    // })
  }
  checkLoginAdmin(data:any):void{
    this.acc.getAll().subscribe(datas =>{
      var check = datas.find((item:any)=> item.email == data.email && item.password == data.password && item.role === 'admin');
      if(check){
        localStorage.setItem('adminLogin',JSON.stringify(check));
        this.route.navigate(['/admin'])
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đăng nhập thành công',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Đăng nhập thất bại!Bạn có chắc bạn là Admin chứ ? ',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

}
