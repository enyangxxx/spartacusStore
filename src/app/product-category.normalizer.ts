import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }
  
  convert(source: Occ.Product, target?: any): Product {
    if(source.categories && source.categories.length){
      target.firstCategory = source.categories[0].name.replace(/ /g, '-').toLowerCase();
    }

    return target;
  }
}
