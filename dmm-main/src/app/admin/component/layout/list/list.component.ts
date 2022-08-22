import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/Service/blog.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listProduct:any;
  keyword:any;

  constructor(private blogService:BlogService,private route :Router,private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any;
    this.actRouter.paramMap.subscribe(param=>{
      id = param.get('id');
      if(id == 1 || id ==2 || id==3||id==4||id==5||id==6||id==7||id==8||id==9||id==10||id==11||id==12){
        this.blogService.getFilterList(id).subscribe((data)=>{
          this.listProduct = data;
        })
      }else{
        this.blogService.getAll().subscribe((data)=>{
          this.listProduct = data;
        })
      }
    })
  }
  getList(){
    this.blogService.getAll().subscribe((data)=>{
      return this.listProduct = data;
    })
  }
  deleteItem(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.blogService.delete(id).subscribe((data)=>{
          this.listProduct = data;
          this.getList();
            // this.route.navigate(['/admin'])
          // this.getList();
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
