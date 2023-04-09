import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  colorChose: string = '';
  dataVehical: any;
  sliderImg: any = [];
  account: any;
  getCart: any;
  imgBrand:any;
  subtotal:any;
  dateBuy:any;
  billingCheckbox: boolean = false;
  constructor(private actRout: ActivatedRoute, private vehicalSer:ProductService, private categorySer: CategoryService) { }
  formGroup = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
    ]),
    lastname: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z_.][a-zA-Z0-9]{0,10}@[a-z0-9]{4,10}\.[a-z]{2,5}$')
    ]),
    password: new FormControl('', [
    ]),
    telephoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0][1-9]{9}$'),
    ]),
    socialSecurityNumber: new FormControl('',[
      Validators.required,
      Validators.pattern('[0-9]{9}')
    ]),
    city: new FormControl('',[
      Validators.required
    ]),
    birth: new FormControl('',[
      Validators.required
    ])
  })
  ngOnInit(): void {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
    let year = date.getFullYear();
    this.dateBuy = `${day}/${month}/${year}`;
    this.getItem();
  }
  get form(): any {
    return this.formGroup.controls;
  }
  getItem(){
    document.documentElement.scrollTop = 0;
    let id = this.actRout.snapshot.params['id'];
    this.vehicalSer.getAll().subscribe((data:any)=>{
      this.dataVehical = data.find((item:any)=>{
        return item.id == id;
      })
      this.sliderImg = this.dataVehical.allImg;
      this.categorySer.getAll().subscribe((item:any)=>{
        let dataCategory:any = item.find((category:any)=>{
          return category.id == this.dataVehical.category_id
        })
     
        this.imgBrand = dataCategory.logo;
      })
    })
  }
  chosePaint(color: string) {
    for (let i = 0; i < this.dataVehical.paint.length; i++) {
      let box = document.getElementById(`box${this.dataVehical.paint[i].color}`) as HTMLDivElement | null;
      box?.classList.remove('borderChose');
    }
    let box = document.getElementById(`box${color}`) as HTMLDivElement | null;
    box?.classList.add('borderChose');
    this.colorChose = color;
  }
  OptionsSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      
      0: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
      
    },
    nav: false
  }
  checkBilling() {
    if (this.billingCheckbox) {
      this.billingCheckbox = false;
    } else {
      this.billingCheckbox = true;
    }
  }
  buyCart(){
    if(!this.billingCheckbox || this.form.firstname.invalid || this.form.city.invalid || this.form.birth.invalid  || this.form.lastname.invalid || this.form.socialSecurityNumber.invalid || this.form.address.invalid || this.form.email.invalid || this.form.telephoneNumber.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "You have not filled in enough information",
        footer: '<b>Please retry again!</b>'
      })
    }else{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successful purchase',
        text: 'Thank you for shopping at Carrio Motor Cars',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
