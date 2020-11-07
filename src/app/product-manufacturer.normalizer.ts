import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManufacturerNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: any): Product {
    if(source.manufacturer){
      target.manufacturerForUrl = source.manufacturer.toLowerCase();
    }
    return target;
  }
}
