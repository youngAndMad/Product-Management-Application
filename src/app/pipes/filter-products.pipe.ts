import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../components/models/product";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products : IProduct[] , search : string): IProduct[] {
    if (search === undefined){
      return products;
    }
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
