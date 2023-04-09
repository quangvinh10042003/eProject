import { WarrantyService } from './../../services/warranty.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css']
})
export class WarrantyComponent implements OnInit {
  item: any;
  constructor(private actRouter: ActivatedRoute, private warrantySer:WarrantyService) { }

  ngOnInit(): void {
    let id: number = this.actRouter.snapshot.params['id'];
    this.warrantySer.getAll().subscribe((data:any)=>{
      this.item = data.find((item:any)=>{
        return item.id == id;
      })
    })
  }

}
