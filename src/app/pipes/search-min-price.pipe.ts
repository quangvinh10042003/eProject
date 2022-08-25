import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMinPrice'
})
export class SearchMinPricePipe implements PipeTransform {

  transform(list: any[], minPrice?:number): any[] {

    if(minPrice){
      return list.filter(data=>{
        return parseInt(data.sale) >= minPrice;
      })
    }else{
      return list;
    }
  }

}
