import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhapService } from 'src/app/nhap/nhap.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  list:any;

  constructor(private act:ActivatedRoute,private NhapService:NhapService) { }

  ngOnInit(): void {
    let id = this.act.snapshot.params["id"];
    this.NhapService.find(id).subscribe((data)=>{
      this.list = data;
    })
  }

}
