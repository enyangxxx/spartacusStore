import { TestBed } from '@angular/core/testing';

import { ProductManufacturerNormalizer } from './product-manufacturer.normalizer';

describe('ProductManufacturerNormalizer', () => {
  let service: ProductManufacturerNormalizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductManufacturerNormalizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
