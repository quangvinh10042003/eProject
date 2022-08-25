import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2'
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
  constructor(private actRout: ActivatedRoute, private vehicalSer:ProductService) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    let id = this.actRout.snapshot.params['id'];
    this.vehicalSer.getItem(id).subscribe(data => {
      this.sliderImg = data.allImg;
      this.dataVehical = data;
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
      }
    },
    nav: false
  }

}
