import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  categoryList:any;
  listProduct:any;
  categoryId:number = 1;
  quantitySlide:number = 1;
  allImg:any = []

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
      Validators.min(10)
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
      Validators.required,
      Validators.min(0)
    ]),
    capacity:new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
    allImg:new FormControl(''),
    description:new FormControl(''),
    productImg: new FormControl(''),
    endImg:new FormControl(''),
    save:new FormControl('')
  })
  constructor(private router:ActivatedRoute,private blogService:BlogService,private route:Router) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.blogService.find(this.id).subscribe((data)=>{
      if(data){
        this.formIn4.patchValue(data)
      }
    })
  }
 
  get form():any{
    return this.formIn4.controls;
  }
  enterSlider(){
    this.allImg = [];
    let setSlide = document.getElementById('setSlide') as HTMLDivElement | null;
    for(let i=1;i<=this.quantitySlide;i++){
      let id = i;
      let img:any = [];
      this.allImg.push({id,img})
      console.log(this.allImg)
    }
    setSlide?.classList.remove('d-none')
  }
  setSlide(){
    this.form.allImg.value = this.allImg;
    console.log(this.form.allImg.value)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your slide has been saved',
      showConfirmButton: false,
      timer: 1000
    })
  }
  formSubmit(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.blogService.update(this.id,this.formIn4.value).subscribe((data:any)=>{
          if(data){
            this.route.navigate(['/admin'])
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }else{
      
      }
    })
   
  }

}
