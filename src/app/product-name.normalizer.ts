import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class ProductNameNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: any): Product {
    if (source.name){
      target.nameForUrl = source.name.replace(/ /g, '-').toLowerCase().substr(0,10);
    }
    return target;
  }
}
