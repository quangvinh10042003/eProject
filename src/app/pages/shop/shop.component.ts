import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { YearService } from './../../services/year.service';
import { BodyStyleService } from './../../services/body-style.service';
import { ColorService } from './../../services/color.service';
import { IntColorService } from './../../services/int-color.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  menuVariable: boolean = false;
  listAllMileage: any;
  listAll: any;
  listCategory: any;
  numberOfPage: any;
  yearProduct: any;
  check: any;
  contactData: any;
  keyword: any;
  listBodyStyle: any;
  CatebodyStyle: any;
  CateColor: any;
  listColor: any;
  CateIntColor: any;
  listIntColor: any
  pageNum: any;
  listProduct: any = [];
  listPage: any = [];
  listAllProduct: any;
  startOfProduct: number = 0;
  endOfProduct: number = 9;
  lengthProduct: any;
  constructor(private productService: ProductService, private actRouter: ActivatedRoute, private categoryService: CategoryService, private yearService: YearService, private bodyStyle: BodyStyleService, private colorService: ColorService, private intColor: IntColorService) { }

  ngOnInit(): void {
    // lấy sản phẩm 

    let id: any;
    this.actRouter.paramMap.subscribe(params => {
      id = params.get('id');
      if (id == 1 || id == 2 || id == 3 || id == 4 || id == 5 || id == 6) {
        this.pageNum = 1;
        this.listPage = [];
        this.productService.getAll().subscribe((data: any) => {
          this.listProduct = data.filter((item: any) => {
            return item.category_id == id;
          });
          this.listAllProduct = data;
          this.lengthProduct = this.listProduct.length;
          this.numberOfPage = Math.floor(this.lengthProduct / 10 + 1);
          for (let i = 0; i <= this.numberOfPage; i++) {
            if (i >= this.pageNum && i < this.pageNum + 5)
              this.listPage.push(i);
          }
          this.startOfProduct = this.pageNum * 10 - 10;
          this.endOfProduct = this.pageNum * 10;
        });
      } else {
        this.pageNum = 1;
        this.listPage = [];
        this.productService.getAll().subscribe((data) => {
          this.listProduct = data;
          this.listAllProduct = data;
          this.lengthProduct = this.listProduct.length;
          this.numberOfPage = Math.floor(this.lengthProduct / 10 + 1);
          for (let i = 0; i <= this.numberOfPage; i++) {
            if (i >= this.pageNum && i < this.pageNum + 5)
              this.listPage.push(i);
          }
          this.startOfProduct = this.pageNum * 10 - 10;
          this.endOfProduct = this.pageNum * 10;
        });
      }
    });
    this.categoryService.getAll().subscribe((data) => {
      this.listCategory = data;
    })
    this.yearService.getAll().subscribe((data) => {
      this.yearProduct = data;
    })

    this.bodyStyle.getAllBody().subscribe((data) => {
      this.CatebodyStyle = data;
    })
    this.colorService.getAllColor().subscribe((data) => {
      this.CateColor = data;
    })
    this.intColor.getAllInt().subscribe((data) => {
      this.CateIntColor = data;
    })
    this.productService.getAll().subscribe((data) => {
      this.listAll = data;
    })
    this.productService.getAll().subscribe((data) => {
      this.listBodyStyle = data;
    })
    this.productService.getAll().subscribe((data) => {
      this.listColor = data;
    })

    this.productService.getAll().subscribe((data) => {
      this.listIntColor = data;
    })
  }
  findYear(year: number): void {
    this.listPage = [];
    this.listProduct = this.listAll.filter((item: any) => {
      return item.year == year;
    })
    this.lengthProduct = this.listProduct.length;
    this.numberOfPage = Math.floor(this.lengthProduct / 10 + 1);
    for (let i = 0; i <= this.numberOfPage; i++) {
      if (i >= this.pageNum && i < this.pageNum + 5)
        this.listPage.push(i);
    }
    this.startOfProduct = this.pageNum * 10 - 10;
    this.endOfProduct = this.pageNum * 10;
    this.closeMenuMobile();
  }
  findBodyStyle(bodyStyle: any): void {
    this.listPage = [];
    this.listProduct = this.listBodyStyle.filter((item: any) => {
      return item.bodyStyle == bodyStyle;
    })
    this.lengthProduct = this.listProduct.length;
    this.numberOfPage = Math.floor(this.lengthProduct / 10 + 1);
    for (let i = 0; i <= this.numberOfPage; i++) {
      if (i >= this.pageNum && i < this.pageNum + 5)
        this.listPage.push(i);
    }
    this.startOfProduct = this.pageNum * 10 - 10;
    this.endOfProduct = this.pageNum * 10;
    this.closeMenuMobile();
  }
  findColor(extColor: any): void {
    this.listPage = [];
    this.listProduct = this.listColor.filter((item: any) => {
      return item.extColor == extColor;
    })
    this.lengthProduct = this.listProduct.length;
    this.numberOfPage = Math.floor(this.lengthProduct / 10 + 1);
    for (let i = 0; i <= this.numberOfPage; i++) {
      if (i >= this.pageNum && i < this.pageNum + 5)
        this.listPage.push(i);
    }
    this.startOfProduct = this.pageNum * 10 - 10;
    this.endOfProduct = this.pageNum * 10;
    this.closeMenuMobile();
  }
  findIntColor(intColor: any): void {
    this.listProduct = this.listIntColor.filter((item: any) => {
      return item.intColor == intColor;
    })
    this.listPage = [];
    this.lengthProduct = this.listProduct.length;
    this.numberOfPage = Math.floor(this.lengthProduct / 10 + 1);
    for (let i = 0; i <= this.numberOfPage; i++) {
      if (i >= this.pageNum && i < this.pageNum + 5)
        this.listPage.push(i);
    }
    this.startOfProduct = this.pageNum * 10 - 10;
    this.endOfProduct = this.pageNum * 10;
    this.closeMenuMobile();
  }
  openMenu() {
    let menu = document.getElementById('modalMobileFilter') as HTMLDivElement | null;
    menu?.classList.remove("d-none");
  }
  closeMenuMobile() {
    let menu = document.getElementById('modalMobileFilter') as HTMLDivElement | null;
    menu?.classList.add("d-none");
  }
  firstPage() {
    this.pageNum = 1;
    this.chosePage(this.pageNum);
  }
  lastPage() {
    this.pageNum = this.numberOfPage;
    this.chosePage(this.pageNum);
  }
  nextPage() {
    if (this.pageNum <= this.numberOfPage - 1) {
      this.pageNum += 1;
      this.chosePage(this.pageNum);
    } else { }
  }
  prevPage() {
    if (this.pageNum > 1) {
      this.pageNum -= 1;
      this.chosePage(this.pageNum);
    } else { }
  }
  chosePage(page: number) {
    this.pageNum = page;
    this.startOfProduct = this.pageNum * 10 - 10;
    this.endOfProduct = this.pageNum * 10;
  }
  SortLowToHigh(a: any, b: any) {
    let typeA = a.price;
    let typeB = b.price;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison * -1;
  }
  SortHighToLow(a: any, b: any) {
    let typeA = a.price;
    let typeB = b.price;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison * 1;
  }
  SortYearHighToLow(a: any, b: any) {
    let typeA = a.year;
    let typeB = b.year;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison * 1;
  }
  SortYearLowToLow(a: any, b: any) {
    let typeA = a.year;
    let typeB = b.year;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  SortPrice(value: string) {
    switch (value) {
      case "1": this.listProduct.sort(this.SortHighToLow); break;
      case "2": this.listProduct.sort(this.SortLowToHigh); break;
      case "3": this.listProduct.sort(this.SortYearHighToLow); break;
      case "4": this.listProduct.sort(this.SortYearLowToLow); break;
    }
  }
}
