import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  formSigup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
      phone: new FormControl('', [
      Validators.required,
      Validators.pattern("(09|03|07|08|05)+([0-9]{8})")
    ]),
  })
  ngOnInit(): void {
  }
  
  onSubmit(): void {
    if(this.f.userName.invalid || this.f.lastName.invalid  || this.f.email.invalid  || this.f.phone.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "You have not filled in enough information",
        footer: '<b>Please let we know who you are</b>'
      })
    }else{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Thank you for your comments',
        text: 'We will get back to you as soon as possible',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
  get f(): any {
    return this.formSigup.controls;
  }
}
